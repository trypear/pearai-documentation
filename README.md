# PearAI Docs

Markdown content exists in the `docs/` folder, nested as it will be shown in the sidebar. `docusaurus.config.js` defines important footer, sidebar, and title content for the site.

This project is deployed through a separate Vercel project, but is used by the landing page at https://trypear.ai/docs/. In the `vercel.json` of the landing page, there's a redirect for the URL to be for this documentation page.
The reason we need a separate repository is because when included in the landing page, configurations from the outer directory mess up the Vercel deployment build.

## How to run

1. Fork repository and clone
2. `npm install`
3. `npm run build`
4. `npm run serve`
