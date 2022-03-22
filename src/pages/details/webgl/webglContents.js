import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";
import { sortContentsByOrder } from "../../../utils/sortContentsByOrder";

const url = "https://www.tutorialspoint.com/webgl";

export const webglContents = [
  {
    id: uuidv4(),
    title: "WebGL",
    isLargerTitle: true,
    path: "/webgl",
    url: `${url}/index.htm`,
    anchor: "WebGL",
    text: {
      p1: (
        <p>
          WebGL (Web Graphics Library) is the new standard for 3D graphics on
          the Web, designed for rendering 2D graphics and interactive 3D
          graphics.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "OpenGL",
    isLargerTitle: false,
    path: "/webgl",
    url: `${url}/webgl_introduction.htm`,
    anchor: "OpenGL",
    text: {
      p1: (
        <p>
          OpenGL (Open Graphics Library) is a cross-language, cross-platform API
          for 2D and 3D graphics. It is a collection of commands.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Rendering",
    isLargerTitle: false,
    path: "/webgl",
    url: `${url}/webgl_introduction.htm`,
    anchor: "Rendering",
    text: {
      p1: (
        <>
          <p>
            Rendering is the process of generating an image from a model using
            computer programs. In graphics, a virtual scene is described using
            information like geometry, viewpoint, texture, lighting, and
            shading, which is passed through a render program. The output of
            this render program will be a digital image.
          </p>
          <ol className="list">
            <li>
              <strong>Software Rendering</strong> - All the rendering
              calculations are done with the help of CPU.
            </li>
            <li>
              <strong>Hardware Rendering</strong> - All the graphics
              computations are done by the GPU (Graphical processing unit).
            </li>
          </ol>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "GPU",
    isLargerTitle: false,
    path: "/webgl",
    url: `${url}/webgl_introduction.htm`,
    anchor: "GPU",
    text: {
      p1: (
        <p>
          According to NVIDIA, a GPU is "a single chip processor with integrated
          transform, lighting, triangle setup/clipping, and rendering engines
          capable of processing a minimum of 10 million polygons per second."
          Unlike multi-core processors with a few cores optimized for sequential
          processing, a GPU consists of thousands of smaller cores that process
          parallel workloads efficiently. Therefore, the GPU accelerates the
          creation of images in a frame buffer (a portion of ram which contains
          a complete frame data) intended for output to a display.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "The Rendering Context",
    isLargerTitle: false,
    path: "/webgl",
    url: `${url}/webgl_introduction.htm`,
    anchor: "rendering_context",
    text: {
      p1: (
        <p>
          The canvas element has a DOM method called getContext(), which is used
          to obtain the rendering context and its drawing functions. This method
          takes one parameter, the type of context 2d.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "WebGL Context",
    isLargerTitle: false,
    path: "/webgl",
    url: `${url}/webgl_introduction.htm`,
    anchor: "webgl_context",
    text: {
      p1: (
        <p>
          HTML5 Canvas is also used to write WebGL applications. To create a
          WebGL rendering context on the canvas element, you should pass the
          string "experimental-webgl", instead of "2d" to the
          "canvas.getContext()" method. Some browsers support only 'webgl'.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "WebGL - Coordinate System",
    isLargerTitle: false,
    path: "/webgl",
    url: `${url}/webgl_basics.htm`,
    anchor: "coordinate system",
    text: {
      p1: (
        <p>
          Just like any other 3D system, you will have x, y and z axes in WebGL,
          where the z axis signifies <strong>depth</strong>. The coordinates in
          WebGL are restricted to (1, 1, 1) and (-1, -1, - 1). It means − if you
          consider the screen projecting WebGL graphics as a cube, then one
          corner of the cube will be (1, 1, 1) and the opposite corner will be
          (-1, -1, -1). WebGL won't display anything that is drawn beyond these
          boundaries.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "WebGL Graphics",
    isLargerTitle: false,
    path: "/webgl",
    url: `${url}/webgl_basics.htm`,
    anchor: "webgl_graphics",
    text: {
      p1: (
        <>
          <p>
            After getting the WebGL context of the canvas object, you can start
            drawing graphical elements using WebGL API in JavaScript. Here are
            some fundamental terms you need to know before starting with WebGL.
          </p>
          <ol className="list">
            <li>
              <strong>Vertices</strong> - Generally, to draw objects such as a
              polygon, we mark the points on the plane and join them to form a
              desired polygon. A <strong>vertex</strong> is a point which
              defines the conjunction of the edges of a 3D object. It is
              represented by three floating point values each representing x, y,
              z axes respectively.
            </li>
            <li>
              <strong>Indices</strong> - In WebGL, numerical values are used to
              identify the vertices. These numerical values are known as
              indices. These indices are used to draw meshes in WebGL.
            </li>
            <li>
              <strong>Arrays</strong> - Unlike OpenGL and JoGL, there are no
              predefined methods in WebGL to render the vertices directly. We
              have to store them manually using JavaScript arrays.
            </li>
            <li>
              <strong>Buffers</strong> - Buffers are the memory areas of WebGL
              that hold the data. There are various buffers namely, drawing
              buffer, frame buffer, <strong>vetex buffer</strong>, and{" "}
              <strong>index buffer</strong>. The vertex buffer and index buffer
              are used to describe and process the geometry of the model.
            </li>
            <li>
              <strong>Mesh</strong> - To draw 2D or 3D objects, the WebGL API
              provides two methods namely, <strong>drawArrays()</strong> and{" "}
              <strong>drawElements()</strong>. These two methods accept a
              parameter called mode using which you can select the object you
              want to draw. The options provided by this field are restricted to
              points, lines, and triangles.
            </li>
          </ol>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Vertex Shader",
    isLargerTitle: false,
    path: "/webgl",
    url: `${url}/webgl_basics.htm`,
    anchor: "vertex_shader",
    text: {
      p1: (
        <p>
          Vertext shader is the program code called on every vertex. It is used
          to transform (move) the geometry (ex: triangle) from one place to
          another. It handles the data of each vertex (per-vertex data) such as
          vertex coordinates, normals, colors, and texture coordinates.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Fragment Shader(Pixel Shader)",
    isLargerTitle: false,
    path: "/webgl",
    url: `${url}/webgl_basics.htm`,
    anchor: "fragment_shader",
    text: {
      p1: (
        <p>
          A mesh is formed by multiple triangles, and the surface of each of the
          triangles is known as a <strong>fragment</strong>. Fragment shader is
          the code that runs on all pixels of every fragment. It is written to
          calculate and fill the color on <i>individual pixels</i>.
        </p>
      ),
    },
  },
];

// The contents length.
export const contentsLength = webglContents.length;
// The sorted contents by the order.
sortContentsByOrder(webglContents);

// To hold the items that added subpath(i.e cs/p1, cs/p2) to the path.
let subpathContents = [];
// Add the url parameter to the cs contents' path to show the content based on the route when click the breadcrumbs.
export const webglContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  webglContents,
);
