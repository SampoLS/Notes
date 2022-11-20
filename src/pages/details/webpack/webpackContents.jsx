import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";
import { sortContentsByOrder } from "../../../utils/sortContentsByOrder";

const url = "https://webpack.js.org";
export const webpackContents = [
  {
    id: uuidv4(),
    title: "Webpack",
    isLargerTitle: true,
    path: "/webpack",
    url: `${url}`,
    anchor: "webpack",
    text: {
      p1: (
        <p>
          At its core, webpack is a static module bundler for modern JavaScript
          applications. When webpack processes your application, it internally
          builds a dependency graph from one or more entry points and then
          combines every module your project needs into one or more bundles,
          which are static assets to serve your content from.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Entry",
    isLargerTitle: false,
    path: "/webpack",
    url: `${url}/concepts/#entry`,
    anchor: "entry",
    text: {
      p1: (
        <p>
          An <strong>entry point</strong> indicates which module webpack should
          use to begin building out its internal dependency graph. Webpack will
          figure out which other modules and libraries that entry point depends
          on (directly and indirectly). By default its value is ./src/index.js.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Output",
    isLargerTitle: false,
    path: "/webpack",
    url: `${url}/concepts/#output`,
    anchor: "output",
    text: {
      p1: (
        <p>
          The <strong>output</strong> property tells webpack where to emit the
          bundles it creates and how to name these files. It defaults to
          ./dist/main.js for the main output file and to the ./dist folder for
          any other generated file.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Loaders",
    isLargerTitle: false,
    path: "/webpack",
    url: `${url}/concepts/#loaders`,
    anchor: "loaders",
    text: {
      p1: (
        <p>
          Out of the box, webpack only understands JavaScript and JSON files.{" "}
          <strong>Loaders</strong> allow webpack to process other types of files
          and convert them into valid modules that can be consumed by your
          application and added to the dependency graph.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Plugins",
    isLargerTitle: false,
    path: "/webpack",
    url: `${url}/concepts/#plugins`,
    anchor: "plugins",
    text: {
      p1: (
        <p>
          While loaders are used to transform certain types of modules, plugins
          can be leveraged to perform a wider range of tasks like bundle
          optimization, asset management and injection of environment variables.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Mode",
    isLargerTitle: false,
    path: "/webpack",
    url: `${url}/concepts/#mode`,
    anchor: "mode",
    text: {
      p1: (
        <p>
          By setting the `mode` parameter to either `development`, `production`
          or `none`, you can enable webpack's built-in optimizations that
          correspond to each environment. The default value is `production`.
        </p>
      ),
    },
  },
];

// The contents length.
export const contentsLength = webpackContents.length;
// The sorted contents by the order.
sortContentsByOrder(webpackContents);

// To hold the items that added subpath(i.e cs/p1, cs/p2) to the path.
let subpathContents = [];
// Add the url parameter to the wepback contents' path to show the content based on the route when click the breadcrumbs.
export const webpackContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  webpackContents,
);
