import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const rootDir = resolve(new URL("..", import.meta.url).pathname);
const envPath = resolve(rootDir, ".env");
const outputPath = resolve(rootDir, "src/data/notion.generated.json");

await loadDotEnv(envPath);

const token = process.env.NOTION_TOKEN;
const pageId = normalizeNotionId(process.env.NOTION_PAGE_ID || process.env.NOTION_PAGE_URL || "");
const notionVersion = process.env.NOTION_VERSION || "2026-03-11";

if (!token || !pageId) {
  console.error(
    [
      "Missing Notion connection settings.",
      "",
      "Create ids-lab-site/.env with:",
      "NOTION_TOKEN=ntn_xxx",
      "NOTION_PAGE_ID=b794f37502eb42d39674b337f55f6e01",
      "NOTION_VERSION=2026-03-11",
      "",
      "Then run this command again. If you use an internal connection, also share the page with that connection.",
    ].join("\n"),
  );
  process.exit(1);
}

const api = createNotionClient({ token, notionVersion });
const rootPage = await api.page(pageId);
const snapshot = {
  syncedAt: new Date().toISOString(),
  sourcePageId: pageId,
  sourceTitle: getPageTitle(rootPage),
  notionVersion,
  tree: await readBlockTree(api, pageId),
};

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");

console.log(`Synced Notion content to ${outputPath}`);

async function loadDotEnv(path) {
  if (!existsSync(path)) return;
  const raw = await readFile(path, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    let value = trimmed.slice(eqIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

function normalizeNotionId(value) {
  const compact = value.replace(/-/g, "");
  const match = compact.match(/[0-9a-fA-F]{32}/);
  if (!match) return "";
  const id = match[0].toLowerCase();
  return `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(16, 20)}-${id.slice(20)}`;
}

function createNotionClient({ token, notionVersion }) {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Notion-Version": notionVersion,
    "Content-Type": "application/json",
  };

  async function request(path) {
    const response = await fetch(`https://api.notion.com/v1${path}`, { headers });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message = body.message || response.statusText;
      throw new Error(`Notion API ${response.status}: ${message}`);
    }
    return body;
  }

  return {
    page: (id) => request(`/pages/${id}`),
    children: async (blockId) => {
      const results = [];
      let cursor = "";
      do {
        const query = new URLSearchParams({ page_size: "100" });
        if (cursor) query.set("start_cursor", cursor);
        const page = await request(`/blocks/${blockId}/children?${query.toString()}`);
        results.push(...page.results);
        cursor = page.has_more ? page.next_cursor : "";
      } while (cursor);
      return results;
    },
  };
}

async function readBlockTree(api, blockId) {
  const children = await api.children(blockId);
  const nodes = [];

  for (const block of children) {
    const node = blockToNode(block);
    if (!node) continue;
    if (block.has_children) {
      node.children = await readBlockTree(api, block.id);
    }
    nodes.push(node);
  }

  return nodes;
}

function blockToNode(block) {
  const payload = block[block.type] || {};

  if (block.type === "divider") {
    return { id: block.id, type: "divider" };
  }

  if (block.type === "child_page") {
    return {
      id: block.id,
      type: "page",
      title: payload.title || "Untitled",
    };
  }

  if (block.type === "image") {
    return {
      id: block.id,
      type: "image",
      caption: plainText(payload.caption),
      url: payload.file?.url || payload.external?.url || "",
    };
  }

  const text = plainText(payload.rich_text);
  const supportedTextBlocks = new Set([
    "paragraph",
    "heading_1",
    "heading_2",
    "heading_3",
    "bulleted_list_item",
    "numbered_list_item",
    "quote",
    "callout",
  ]);

  if (supportedTextBlocks.has(block.type)) {
    return {
      id: block.id,
      type: block.type,
      text,
    };
  }

  return {
    id: block.id,
    type: block.type,
    text,
  };
}

function plainText(richText = []) {
  return richText.map((item) => item.plain_text || "").join("");
}

function getPageTitle(page) {
  const property = Object.values(page.properties || {}).find((item) => item.type === "title");
  return property ? plainText(property.title) : "Untitled";
}
