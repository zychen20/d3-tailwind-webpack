# D3.js Tailwind CSS Webpack Boilerplate

## About

I am doing a SVG animation project and find it annoying that I can't use IntelliSense because I'm using D3.js via a CDN.
Thus, I made this simple boilerplate so that I can see IntelliSense prompt and publish a preview via services like Netlify Drop.

Besides, I'm using Tailwind CSS for some quick styling. So I added it into the boilerplate as well.

## How to Use

In case you are not familiar with npm or Webpack. Here is a brief instruction below.

All commands are run from the root of the repository:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |

## Ingredients

### Plugins

- HtmlWebpackPlugin

### Loaders

- style-loader
- css-loader
- postcss-loader
- csv-loader

## Reference

The sample data and code come from https://d3-graph-gallery.com/graph/scatter_basic.html

## License

WTFPL
