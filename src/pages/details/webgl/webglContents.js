import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";
import { sortContentsByOrder } from "../../../utils/sortContentsByOrder";

const url = "https://www.tutorialspoint.com/webgl";
const learnwebglUrl = "http://learnwebgl.brown37.net";

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
              <b>Software Rendering</b> - All the rendering calculations are
              done with the help of CPU.
            </li>
            <li>
              <b>Hardware Rendering</b> - All the graphics computations are done
              by the GPU (Graphical processing unit).
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
          where the z axis signifies <b>depth</b>. The coordinates in WebGL are
          restricted to (1, 1, 1) and (-1, -1, - 1). It means − if you consider
          the screen projecting WebGL graphics as a cube, then one corner of the
          cube will be (1, 1, 1) and the opposite corner will be (-1, -1, -1).
          WebGL won't display anything that is drawn beyond these boundaries.
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
              <b>Vertices</b> - Generally, to draw objects such as a polygon, we
              mark the points on the plane and join them to form a desired
              polygon. A <b>vertex</b> is a point which defines the conjunction
              of the edges of a 3D object. It is represented by three floating
              point values each representing x, y, z axes respectively.
            </li>
            <li>
              <b>Indices</b> - In WebGL, numerical values are used to identify
              the vertices. These numerical values are known as indices. These
              indices are used to draw meshes in WebGL.
            </li>
            <li>
              <b>Arrays</b> - Unlike OpenGL and JoGL, there are no predefined
              methods in WebGL to render the vertices directly. We have to store
              them manually using JavaScript arrays.
            </li>
            <li>
              <b>Buffers</b> - Buffers are the memory areas of WebGL that hold
              the data. There are various buffers namely, drawing buffer, frame
              buffer, <b>vetex buffer</b>, and <b>index buffer</b>. The vertex
              buffer and index buffer are used to describe and process the
              geometry of the model.
            </li>
            <li>
              <b>Mesh</b> - To draw 2D or 3D objects, the WebGL API provides two
              methods namely, <b>drawArrays()</b> and <b>drawElements()</b>.
              These two methods accept a parameter called mode using which you
              can select the object you want to draw. The options provided by
              this field are restricted to points, lines, and triangles.
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
  {
    id: uuidv4(),
    title: "WebGL Glossary",
    isLargerTitle: false,
    path: "/webgl",
    url: `${learnwebglUrl}/the_big_picture/introduction.html`,
    anchor: "webgl_glossary",
    text: {
      p1: (
        <>
          <ol className="list">
            <li>
              <b>mastery learning</b> - learn a foundational topic completely
              before moving on to harder more advanced topics.
            </li>
            <li>
              <b>web server</b> - a program that runs on a server computer and
              stores web pages and related files. When a client computer
              requests a web page, the web server sends the requested files to
              the client.
            </li>
            <li>
              <b>CPU</b> - central processing unit - the hardware that controls
              a computing device and performs all of its calculations.
            </li>
            <li>
              <b>GPU</b> - graphic processing unit - the hardware that is
              optimized to produce 3D computer graphics.
            </li>
            <li>
              <b>RAM</b> - random access memory - where data and programs are
              stored for CPU access and manipulation.
            </li>
            <li>
              <b>GPU memory</b> - where data and programs are stored for GPU
              access and manipulation.
            </li>
            <li>
              <b>preprocessing step</b> - manipulation of data that happens
              once.
            </li>
            <li>
              <b>computer graphics</b> - pictures and movies created using
              computers.
            </li>
            <li>
              <b>raster graphics</b> - a picture defined by many small dots of
              color.
            </li>
            <li>
              <b>vector graphics</b> - a picture composed of geometric shapes
              defined using mathematical equations.
            </li>
            <li>
              <b>computer-generated imagery(CGI)</b> - using computers to create
              or modify raster images.
            </li>
            <li>
              <b>3D computer graphics</b> - the entire process of creating
              raster images from vector graphics data.
            </li>
            <li>
              <b>render</b> - create a raster image (picture) from vector
              graphics data.
            </li>
            <li>
              <b>graphics pipeline</b> - a series of steps that transforms
              vector graphics descriptions of objects into a raster image.
            </li>
            <li>
              <b>shader program</b> - a computer program written in GLSL (GL
              Shader Language) that runs on the GPU.
            </li>
            <li>
              <b>vertext shader</b> - a computer program written in GLSL that
              positions the geometry of models in a scene.
            </li>
            <li>
              <b>fragment shader</b> - a computer program written in GLSL that
              assigns a color to the pixels that compose a face of a model.
            </li>
            <li>
              <b>GL</b> - graphics language - a proprietary software system for
              creating 3D computer graphics that was created by Silicon Graphics
              Inc. in the 1980's
            </li>
            <li>
              <b>OpenGL</b> - a device independent software system for creating
              3D computer graphics that was released to the public by Silicon
              Graphics Inc. in 1992. It has gone through constant upgrades,
              enhancements, and re-designs.
            </li>
            <li>
              <b>OpenGl ES</b> - OpenGL embedded subset - a stripped down
              version of OpenGL for cheaper, low-power hardware.
            </li>
            <li>
              <b>WebGL</b> - a device independent software system for creating
              3D computer graphics in a web browser. It is an implementation of
              OpenGL ES 2.0 in JavaScript.
            </li>
            <li>
              <b>folder hierarchy</b> - an organization of file folders, where
              each folder has a unique parent folder and possibly contains one
              or more sub-folders.
            </li>
            <li>
              <b>current working folder</b> - the folder on the web server that
              contains the original HTML web page file.
            </li>
            <li>
              <b>relative file path</b> - a series of folder references
              separated by forward slashes that starts from the{" "}
              <i>current working folder</i>.
            </li>
            <li>
              <b>absolute file path</b> - a series of folder references{" "}
              <b>starting the a single forward slash</b> and separated by
              forward slashes. The path is always from the root folder of the
              web site on the web server.
            </li>
            <li>
              "." - a reference to the <i>current working folder</i>.{" "}
            </li>
            <li>".." - a reference to the parent folder.</li>
            <li>
              <b>object oriented programming</b> - a style of programming where
              a class defines a collection of data and a set of
              methods/functions that manipulates that data. Multiple instances
              of a class can be created to implement separate objects of the
              class.
            </li>
            <li>
              <b>class</b> - a collection of data and a set of methods/functions
              that manipulates that data.
            </li>
            <li>
              <b>object</b> - an instance of a class that contains unique data.
              The manipulation of an object does not affect other objects
              implemented from the same class.
            </li>
            <li>
              <b>global identifier</b> - a variable or function that can be used
              anywhere in a program. Global identifiers are bad and should be
              avoided whenever possible.
            </li>
            <li>
              <b>GLSL</b> - graphics language shader language - a programming
              language used in the graphics pipeline to manipulate graphics
              data.
            </li>
            <li>
              <b>context</b> - the environment in which something happens.
            </li>
            <li>
              <b>WebGL context</b> - a JavaScript object that stores the state
              of a WebGL program and provides an interface to all WebGL API
              functions.
            </li>
            <li>-------------------------------</li>
            <li>
              <b>virtual</b> - Something that does not physically exist but is
              created by software to appear real. A virtual world is a
              simulated, artificial, imitation of the real world - or a
              make-believe world that exists only in your mind.
            </li>
            <li>
              <b>object</b> - A single entity in a virtual world that has a
              location, takes up some volume of space, and can be moved, scaled,
              and rotated.
            </li>
            <li>
              <b>model</b> - A mathematical description of an object.
            </li>
            <li>
              <b>scene</b> - A collection of objects that make up a virtual
              world. A scene contains objects that we want to visualize.
            </li>
            <li>
              <b>rendering</b> - The process of creating an image from a
              collection of virtual objects. The image is a representation of
              what is visible from a virtual camera. The objects are only
              visible if there is virtual lighting in the scene.
            </li>
          </ol>
        </>
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
