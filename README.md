# Intelligent Digital Systems Lab Website

An expandable Astro site for the IDS Lab. Content lives in `src/data`, so members, research areas, publications, and news can grow without redesigning the site.

## Local Development

```powershell
.\start-dev.cmd
```

The script uses Codex's bundled Node.js and pnpm runtime, so it works even when local `node` or `pnpm` is not configured on PATH.

To build the static site:

```powershell
.\build.cmd
```

## Content Files

- `src/data/site.ts`: navigation, lab profile, news, research areas
- `src/data/members.ts`: professor, students, alumni
- `src/data/publications.ts`: conference and journal publications

## GitHub Pages

This repository includes `.github/workflows/deploy.yml`. After pushing to a GitHub repository and enabling GitHub Pages with GitHub Actions, pushes to `main` build and publish the site.

For a local project-page build such as `https://username.github.io/ids-site/`, set:

```powershell
$env:PUBLIC_SITE_URL="https://username.github.io"
$env:PUBLIC_BASE_PATH="/ids-site/"
.\build.cmd
```

For a custom domain or root user page, use:

```powershell
$env:PUBLIC_SITE_URL="https://your-domain.example"
$env:PUBLIC_BASE_PATH="/"
.\build.cmd
```
