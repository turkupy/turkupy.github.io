# Home of Turku.py

## Contibuting
The branch for development is called `dev`(`master` is the branch from which deploys are made, due to the page being hosted on the org GitHub pages).
1. Clone the repo
2. Run `yarn`
3. Start in dev mode by running `gatsby develop`

## Note that
- Uses yarn, beware.
- Accessibility can be checked using the [Wave web accessibility evaluation browser extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh). Please let us know or make a ticket if you find anything that doesn't fill accessibility requirements!
- Only use the theme colors (exported in `styles.js`).

## Deploying
Currently deploy is done to GitHub pages by making sure `master` is up to date and then calling `yarn deploy`.

## Packages we use
- Starter: [gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)
- react
- `styled-components` for, well, styled components and reusability of styles
- `react-helmet` for site metadata (for search engine config)
- `gh-pages` for deploy