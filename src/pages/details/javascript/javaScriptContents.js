import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";
import { sortContentsByOrder } from "../../../utils/sortContentsByOrder";

// Web API url
const apiUrl = "https://developer.mozilla.org/en-US/docs/Web/API";

// JS url
const jsUrl = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

// This is JavaScript page contents
export const jsContents = [
  {
    id: uuidv4(),
    title: "JavaScript",
    isLargerTitle: true,
    path: "/javascript",
    url: `${jsUrl}`,
    anchor: "javascript",
    text: {
      p1: (
        <p>
          JavaScript (JS) is a lightweight, interpreted, or just-in-time
          compiled programming language with first-class functions. JavaScript
          is a prototype-based, multi-paradigm, single-threaded, dynamic
          language, supporting object-oriented, imperative, and declarative
          (e.g. functional programming) styles.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Window.location",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/Window/location`,
    anchor: "window_location",
    text: {
      p1: (
        <p>
          The Window.location read-only property returns a Location object with
          information about the current location of the document.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Location",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/Location`,
    anchor: "location",
    text: {
      p1: (
        <p>
          The Location interface represents the location (URL) of the object it
          is linked to. Changes done on it are reflected on the object it
          relates to. Both the Document and Window interface have such a linked
          Location, accessible via Document.location and Window.location
          respectively.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Window.history",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/Window/history`,
    anchor: "window_history",
    text: {
      p1: (
        <p>
          The Window.history read-only property returns a reference to the
          History object, which provides an interface for manipulating the
          browser session history (pages visited in the tab or frame that the
          current page is loaded in).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "History",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/History `,
    anchor: "history",
    text: {
      p1: (
        <p>
          The History interface allows manipulation of the browser session
          history, that is the pages visited in the tab or frame that the
          current page is loaded in.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "history.pushState()",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/History/pushState`,
    anchor: "history_pushState",
    text: {
      p1: (
        <p>
          In an HTML document, the history.pushState() method adds an entry to
          the browser's session history stack.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Window: popstate event",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/Window/popstate_event`,
    anchor: "popstate_event",
    text: {
      p1: (
        <p>
          The popstate event of the Window interface is fired when the active
          history entry changes while the user navigates the session history. It
          changes the current history entry to that of the last page the user
          visited or, if history.pushState() has been used to add a history
          entry to the history stack, that history entry is used instead.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Spread syntax (...)",
    isLargerTitle: false,
    path: "/javascript",
    url: `${jsUrl}/Reference/Operators/Spread_syntax`,
    anchor: "Spread_syntax",
    text: {
      p1: (
        <p>
          Spread syntax (...) allows an iterable such as an array expression or
          string to be expanded in places where zero or more arguments (for
          function calls) or elements (for array literals) are expected, or an
          object expression to be expanded in places where zero or more
          key-value pairs (for object literals) are expected.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Proxy",
    isLargerTitle: false,
    path: "/javascript",
    url: `${jsUrl}/Reference/Global_Objects/Proxy`,
    anchor: "Spread_syntax",
    text: {
      p1: (
        <p>
          The Proxy object enables you to create a proxy for another object,
          which can intercept and redefine fundamental operations for that
          object.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Element.scrollIntoView()",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/Element/scrollIntoView`,
    anchor: "scrollIntoView",
    text: {
      p1: (
        <p>
          The Element interface's scrollIntoView() method scrolls the element's
          parent container such that the element on which scrollIntoView() is
          called is visible to the user.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Window.scrollTo()",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/Window/scrollTo`,
    anchor: "scrollTo",
    text: {
      p1: (
        <p>
          Window.scrollTo() scrolls to a particular set of coordinates in the
          document.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Window.scroll()",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/Window/scroll`,
    anchor: "scroll",
    text: {
      p1: (
        <p>
          The Window.scroll() method scrolls the window to a particular place in
          the document.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Window.scrollY",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/Window/scrollY`,
    anchor: "scrollY",
    text: {
      p1: (
        <p>
          The read-only scrollY property of the Window interface returns the
          number of pixels that the document is currently scrolled vertically.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "DOMTokenList",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/DOMTokenList`,
    anchor: "DOMTokenList",
    text: {
      p1: (
        <p>
          The DOMTokenList interface represents a set of space-separated tokens.
          Such a set is returned by Element.classList or
          HTMLLinkElement.relList, and many others.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Closures",
    isLargerTitle: false,
    path: "/javascript",
    url: `${jsUrl}/Closures`,
    anchor: "Closures",
    text: {
      p1: (
        <p>
          A closure is the combination of a function bundled together (enclosed)
          with references to its surrounding state (the lexical environment). In
          other words, a closure gives you access to an outer function’s scope
          from an inner function. In JavaScript, closures are created every time
          a function is created, at function creation time.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Node.childNodes",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/Node/childNodes`,
    anchor: "Node_childNodes",
    text: {
      p1: (
        <p>
          The read-only childNodes property of the Node interface returns a live
          NodeList of child nodes of the given element where the first child
          node is assigned index 0. Child nodes include elements, text and
          comments.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Array.prototype.sort()",
    isLargerTitle: false,
    path: "/javascript",
    url: `${jsUrl}/Reference/Global_Objects/Array/sort`,
    anchor: "Array_prototype_sort",
    text: {
      p1: (
        <p>
          The sort() method sorts the elements of an array in place and returns
          the sorted array. The default sort order is ascending, built upon
          converting the elements into strings, then comparing their sequences
          of UTF-16 code units values.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "DOMTokenList.contains()",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/DOMTokenList/contains`,
    anchor: "DOMTokenList_contains",
    text: {
      p1: (
        <p>
          The contains() method of the DOMTokenList interface returns a boolean
          value — true if the underlying list contains the given token,
          otherwise false.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Element.clientHeight",
    isLargerTitle: false,
    path: "/javascript",
    url: `${apiUrl}/Element/clientHeight`,
    anchor: "Element_clientHeight",
    text: {
      p1: (
        <p>
          The Element.clientHeight read-only property is zero for elements with
          no CSS or inline layout boxes; otherwise, it's the inner height of an
          element in pixels. It includes padding but excludes borders, margins,
          and horizontal scrollbars (if present).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Call stack",
    isLargerTitle: false,
    path: "/javascript",
    url: `https://developer.mozilla.org/en-US/docs/Glossary/Call_stack`,
    anchor: "Call_stack",
    text: {
      p1: (
        <p>
          A call stack is a mechanism for an interpreter (like the JavaScript
          interpreter in a web browser) to keep track of its place in a script
          that calls multiple functions — what function is currently being run
          and what functions are called from within that function.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "The event loop",
    isLargerTitle: false,
    path: "/javascript",
    url: `${jsUrl}/EventLoop`,
    anchor: "The_event_loop",
    text: {
      p1: (
        <p>
          JavaScript has a runtime model based on an event loop, which is
          responsible for executing the code, collecting and processing events,
          and executing queued sub-tasks. This model is quite different from
          models in other languages like C and Java.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Stack",
    isLargerTitle: false,
    path: "/javascript",
    url: `${jsUrl}/EventLoop#stack`,
    anchor: "Stack",
    text: {
      p1: <p>Function calls form a stack of frames.</p>,
    },
  },
  {
    id: uuidv4(),
    title: "Heap",
    isLargerTitle: false,
    path: "/javascript",
    url: `${jsUrl}/EventLoop#Heap`,
    anchor: "Heap",
    text: {
      p1: (
        <p>
          Objects are allocated in a heap which is just a name to denote a large
          (mostly unstructured) region of memory.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Queue",
    isLargerTitle: false,
    path: "/javascript",
    url: `${jsUrl}/EventLoop#Queue`,
    anchor: "Queue",
    text: {
      p1: (
        <p>
          A JavaScript runtime uses a message queue, which is a list of messages
          to be processed. Each message has an associated function that gets
          called to handle the message.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Run-to-completion",
    isLargerTitle: false,
    path: "/javascript",
    url: `${jsUrl}/EventLoop#run-to-completion`,
    anchor: "run-to-completion",
    text: {
      p1: (
        <p>
          Each message is processed completely before any other message is
          processed. This offers some nice properties when reasoning about your
          program, including the fact that whenever a function runs, it cannot
          be preempted and will run entirely before any other code runs (and can
          modify data the function manipulates).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Adding messages",
    isLargerTitle: false,
    path: "/javascript",
    url: `${jsUrl}/EventLoop#adding_messages`,
    anchor: "Adding_messages",
    text: {
      p1: (
        <p>
          In web browsers, messages are added anytime an event occurs and there
          is an event listener attached to it. If there is no listener, the
          event is lost. So a click on an element with a click event handler
          will add a message—likewise with any other event.
        </p>
      ),
    },
  },
];

sortContentsByOrder(jsContents);

export const contentsLength = jsContents.length;

let subpathContents = [];
export const jsContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  jsContents,
);
