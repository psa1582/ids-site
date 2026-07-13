# Notion Connection

The website is a separate local Astro project. The original Notion page has not been edited.

## What was added

This project now includes a Notion sync command:

```powershell
.\sync-notion.cmd
```

When a valid Notion API token is available, the command reads the IDS Lab page and its child pages, then writes:

```text
src/data/notion.generated.json
```

The live website still uses the hand-curated files in `src/data/*.ts`. Once the generated JSON looks good, the next step is to map it automatically into `site.ts`, `members.ts`, and `publications.ts`.

## Notion setup option A: personal access token

This is the easiest path for a private script. The token acts as your own Notion user, so the page does not need to be shared with a bot connection.

1. Open Notion's Developer portal.
2. Go to Personal access tokens.
3. Create a new token and copy it.
4. Create `ids-lab-site/.env` with:

```text
NOTION_TOKEN=ntn_xxx
NOTION_PAGE_ID=b794f37502eb42d39674b337f55f6e01
NOTION_VERSION=2026-03-11
```

5. Run:

```powershell
.\sync-notion.cmd
```

## Notion setup option B: internal connection

Use this if the lab wants a team-owned automation token.

1. Go to Notion's integrations page: `https://www.notion.so/my-integrations`
2. Create a new internal connection.
3. Copy the installation access token.
4. Open the target Notion page.
5. Use Share or Connections to invite/connect the integration to the page.
6. Put that token in `NOTION_TOKEN`.
7. Run `.\sync-notion.cmd`.

If the command returns `Notion API 404`, the integration usually has not been shared with the page yet. If it returns `Notion API 401`, the token is missing or invalid.
