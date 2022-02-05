import { v4 as uuidv4 } from "uuid";

const url =
  "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous";

export const asyncJsContents = [
  {
    id: uuidv4(),
    title: "Asynchronous",
    isLargerTitle: true,
    path: "/asynchronous_js",
    url: `https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous`,
    anchor: "Asynchronous_js",
    text: {
      p1: (
        <>
          <p>
            The term asynchronous refers to two or more objects or events not
            existing or happening at the same time (or multiple related things
            happening without waiting for the previous one to complete).
          </p>
          <p>
            Normally, a given program's code runs straight along, with only one
            thing happening at once. If a function relies on the result of
            another function, it has to wait for the other function to finish
            and return, and until that happens, the entire program is
            essentially stopped from the perspective of the user.
          </p>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Synchronous",
    isLargerTitle: false,
    path: "/asynchronous_js",
    url: `https://developer.mozilla.org/en-US/docs/Glossary/Synchronous`,
    anchor: "Synchronous",
    text: {
      p1: (
        <p>
          Synchronous refers to real-time communication where each party
          receives (and if necessary, processes and replies to) messages
          instantly (or as near to instantly as possible).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Blocking code",
    isLargerTitle: false,
    path: "/asynchronous_js",
    url: `${url}/Concepts#blocking_code`,
    anchor: "Blocking_code",
    text: {
      p1: (
        <p>
          Asynchronous techniques are very useful, particularly in web
          programming. When a web app runs in a browser and it executes an
          intensive chunk of code without returning control to the browser, the
          browser can appear to be frozen. This is called blocking; the browser
          is blocked from continuing to handle user input and perform other
          tasks until the web app returns control of the processor.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Threads",
    isLargerTitle: false,
    path: "/asynchronous_js",
    url: `${url}/Concepts#Threads`,
    anchor: "Threads",
    text: {
      p1: (
        <p>
          A thread is basically a single process that a program can use to
          complete tasks. Each thread can only do a single task at once: Task A
          --&gt; Task B --&gt; Task C. Each task will be run sequentially; a
          task has to complete before the next one can be started.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "JavaScript is single-threaded",
    isLargerTitle: false,
    path: "/asynchronous_js",
    url: `${url}/Concepts#javascript_is_single-threaded`,
    anchor: "javascript_is_single_threaed",
    text: {
      p1: (
        <p>
          JavaScript is traditionally single-threaded. Even with multiple cores,
          you could only get it to run tasks on a single thread, called the main
          thread.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Asynchronous code",
    isLargerTitle: false,
    path: "/asynchronous_js",
    url: `${url}/Concepts#asynchronous_code`,
    anchor: "Asynchronous_code",
    text: {
      p1: (
        <p>
          Features like Promises allow you to set an operation running (e.g. the
          fetching of an image from the server), and then wait until the result
          has returned before running another operation. Features like Promises
          allow you to set an operation running (e.g. the fetching of an image
          from the server), and then wait until the result has returned before
          running another operation
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Async callbacks",
    isLargerTitle: false,
    path: "/asynchronous_js",
    url: `${url}/Introducing#async_callbacks`,
    anchor: "Async_callbacks",
    text: {
      p1: (
        <p>
          Async callbacks are functions that are specified as arguments when
          calling a function which will start executing code in the background.
          When the background code finishes running, it calls the callback
          function to let you know the work is done, or to let you know that
          something of interest has happened. Using callbacks is slightly
          old-fashioned now, but you'll still see them in use in a number of
          older-but-still-commonly-used APIs.
        </p>
      ),
    },
  },
];

export const contentsLength = asyncJsContents.length;
