import { v4 as uuidv4 } from "uuid";

// Old-school url
const archiveUrl = "https://reactjs.org/docs";

// New url
const newUrl = "https://beta.reactjs.org/learn";

export const reactContents = [
  {
    id: uuidv4(),
    title: "React",
    isLargerTitle: true,
    path: "/react",
    url: `${newUrl}`,
    anchor: "react",
    text: {
      p1: (
        <p>
          A JavaScript library for building user interfaces. React stands at the
          intersection of design and programming. It lets you take a complex
          user interface, and break it down into nestable and reusable pieces
          called “components” that fit well together.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Thinking in React",
    isLargerTitle: false,
    path: "/react",
    url: `${newUrl}/thinking-in-react`,
    anchor: "thinking_in_react",
    text: {
      p1: (
        <ol className="list">
          <li>Step 1: Break the UI into a component hierarchy.</li>
          <li>Step 2: Build a static version in React.</li>
          <li>
            Step 3: Find the minimal but complete representation of UI state.
          </li>
          <li>Step 4: Identify where your state should live.</li>
          <li>Step 5: Add inverse data flow.</li>
        </ol>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Components: UI building blocks",
    isLargerTitle: false,
    path: "/react",
    url: `${newUrl}/your-first-component`,
    anchor: "components",
    text: {
      p1: (
        <p>
          A React component is a JavaScript function that you can sprinkle with
          markup(html-like tag in React component called JSX). React lets you
          combine your markup, CSS, and JavaScript into custom “components,”
          reusable UI elements for your app: their names always begin with a
          capital letter, they return JSX markup. Just like with HTML tags, you
          can compose, order and nest components to design whole pages. You can
          define a component once, and then use it in as many places and as many
          times as you like. In a React app, every piece of UI is a component.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "JSX",
    isLargerTitle: false,
    path: "/react",
    url: `${newUrl}/writing-markup-with-jsx`,
    anchor: "jsx",
    text: {
      p1: (
        <p>
          JSX is a syntax extension for JavaScript that lets you write HTML-like
          markup inside a JavaScript file. React components use a syntax
          extension called JSX to represent that markup. JSX looks a lot like
          HTML, but it is a bit stricter and can display dynamic information. As
          the Web became more interactive, logic increasingly determined
          content. JavaScript was in charge of the HTML! This is why in React,
          rendering logic and markup live together in the same place—components!
          Keeping a component's(such as button) rendering logic and markup
          together ensures that they stay in sync with each other on every edit.
          JSX is very minimal as a templating language because it lets you
          organize data and logic using JavaScript.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Curly Braces",
    isLargerTitle: false,
    path: "/react",
    url: `${newUrl}/javascript-in-jsx-with-curly-braces`,
    anchor: "curly-braces",
    text: {
      p1: (
        <>
          <p>
            JSX is a special way of writing JavaScript. That means it's possible
            to use JavaScript inside it—with curly braces {"{}"}. Any JavaScript
            expression will work between curly braces, including function calls.
            You can only use curly braces in two ways inside JSX: 1. As text
            directly inside a JSX tag. 2. As attributes immediately following
            the = sign.
          </p>
          <p>
            Using “double curlies”: CSS and other objects in JSX. In addition to
            strings, numbers, and other JavaScript expressions, you can even
            pass objects in JSX. Objects are also denoted with curly braces,
            like {'{ name: "Hedy Lamarr", inventions: 5 }'}. Therefore, to pass
            a JS object in JSX, you must wrap the object in another pair of
            curly braces: person=
            {'{{ name: "Hedy Lamarr", inventions: 5 }}'}. The next time you see{" "}
            {"{{ and }}"} in JSX, know that it's nothing more than an object
            inside the JSX curlies!
          </p>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Props",
    isLargerTitle: false,
    path: "/react",
    url: `${newUrl}/passing-props-to-a-component`,
    anchor: "prop",
    text: {
      p1: (
        <p>
          React components use props to communicate with each other. Every
          parent component can pass some information to its child components by
          giving them props. Props might remind you of HTML attributes, but you
          can pass any JavaScript value through them, including objects, arrays,
          and functions. React component functions accept a single argument, a
          'props' object. You can't change props. When you need interactivity,
          you'll need to set state.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Pure components",
    isLargerTitle: false,
    path: "/react",
    url: `${newUrl}/keeping-components-pure`,
    anchor: "pure-components",
    text: {
      p1: (
        <p>
          Some JavaScript functions are “pure.” Pure functions only perform a
          calculation and nothing more. By strictly only writing your components
          as pure functions, you can avoid an entire class of baffling bugs and
          unpredictable behavior as your codebase grows. A function is said to
          be pure if the return value is determined by its input values only and
          the return value is always the same for the same input values. A React
          component is said to be pure if it renders the same output for the
          same state and props. React's rendering process must always be pure.
          Components should only return their JSX, and not change any objects or
          variables that existed before rendering—that would make them impure!
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Events",
    isLargerTitle: false,
    path: "/react",
    url: `${newUrl}/responding-to-events`,
    anchor: "responding-to-events",
    text: {
      p1: (
        <p>
          React lets you add event handlers to your JSX. To add an event
          handler, you will first define a function and then pass it as a prop
          to the appropriate JSX tag. Event handlers are the best place for side
          effects.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "State",
    isLargerTitle: false,
    path: "/react",
    url: `${newUrl}/state-a-components-memory`,
    anchor: "state-a-components-memory",
    text: {
      p1: (
        <p>
          Setting state only changes it for the next render. A state variable's
          value never changes within a render, even if its event handler's code
          is asynchronous. React keeps the state values “fixed” within one
          render's event handlers. You don't need to worry whether the state has
          changed while the code is running. Variables and event handlers don't
          “survive” re-renders. Every render has its own event handlers. React
          waits until all code in the event handlers has run before processing
          your state updates. Setting state does not change the variable in the
          existing render, but it requests a new render. React processes state
          updates after event handlers have finished running. This is called
          batching.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Object as state",
    isLargerTitle: false,
    path: "/react",
    url: `${newUrl}/updating-objects-in-state`,
    anchor: "updating-objects-in-state",
    text: {
      p1: (
        <p>
          State can hold any kind of JavaScript value, including objects. But
          you shouldn't change objects that you hold in the React state
          directly. Instead, when you want to update an object, you need to
          create a new one (or make a copy of an existing one), and then set the
          state to use that copy. You should treat any JavaScript object that
          you put into state as read-only.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Array as state",
    isLargerTitle: false,
    path: "/react",
    url: `${newUrl}/updating-arrays-in-state`,
    anchor: "updating-arrays-in-state",
    text: {
      p1: (
        <p>
          Arrays are another type of mutable JavaScript objects you can store in
          state and should treat as immutable. Just like with objects, when you
          want to update an array stored in state, you need to create a new one
          (or make a copy of an existing one), and then set state to use the new
          array.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "React.memo",
    isLargerTitle: false,
    path: "/react",
    url: `${archiveUrl}/react-api.html#reactmemo`,
    anchor: "react_memo",
    text: {
      p1: (
        <p>
          If your component renders the same result given the same props, you
          can wrap it in a call to React.memo for a performance boost in some
          cases by memoizing the result. This means that React will skip
          rendering the component, and reuse the last rendered result.
          React.memo only checks for prop changes. If your function component
          wrapped in React.memo has a useState, useReducer or useContext Hook in
          its implementation, it will still rerender when state or context
          change. This function always used to wrap the child component to
          mitigate the child component's re-render.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "useCallback",
    isLargerTitle: false,
    path: "/react",
    url: `${archiveUrl}/hooks-reference.html#usecallback`,
    anchor: "useCallback",
    text: {
      p1: (
        <p>
          The callback function will be re-created as the component re-rendered
          when the state or props are changed. React's useCallback Hook can be
          used to optimize the rendering behavior of your React function
          components. Returns a memoized callback. Pass an inline callback and
          an array of dependencies. useCallback will return a memoized version
          of the callback that only changes if one of the dependencies has
          changed. This is useful when passing callbacks to optimized child
          components that rely on reference equality to prevent unnecessary
          renders (e.g. shouldComponentUpdate). useCallback function is used to
          wrap a function to mitigate the re-render when other function does
          noting.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Higher-Order Components",
    isLargerTitle: false,
    path: "/react",
    url: `${archiveUrl}/higher-order-components.html`,
    anchor: "higher-order-components",
    text: {
      p1: (
        <p>
          Concretely, a higher-order component is a function that takes a
          component and returns a new component. Whereas a component transforms
          props into UI, a higher-order component transforms a component into
          another component.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Reducer",
    isLargerTitle: false,
    path: "/react",
    url: `${newUrl}/extracting-state-logic-into-a-reducer`,
    anchor: "reducer",
    text: {
      p1: (
        <p>
          Components with many state updates spread across many event handlers
          can get overwhelming. For these cases, you can consolidate all the
          state update logic outside your component in a single function, called
          a “reducer.”
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Refs",
    isLargerTitle: false,
    path: "/react",
    url: `${newUrl}/referencing-values-with-refs`,
    anchor: "refs",
    text: {
      p1: (
        <>
          <p>
            When you want a component to “remember” some information, but you
            don't want that information to trigger new renders, you can use a
            "ref"—it's like a secret “pocket” for storing information in your
            component!
          </p>
          <p>
            The ref points to a number, but, like state, you could point to
            anything: a string, an object, or even a function. Unlike state, ref
            is a plain JavaScript object with the current property that you can
            read and modify. Like state, refs are retained by React between
            re-renders. However, setting state re-renders a component. Changing
            a ref does not!
          </p>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "My Notes",
    isLargerTitle: false,
    path: "/react",
    url: "",
    anchor: "my_notes",
    text: {
      p1: (
        <ol className="list">
          <li>
            The component (and the child component if there is) will be
            re-rendered when the state or props changed except the normal
            variables, and the value of normal variable will not be rendered
            when the next time change, state can be rendered.
          </li>
          <li>Props are a way of passing data from parent to child. </li>
          <li>
            State is reserved only for interactivity, that is, data that changes
            over time.
          </li>
        </ol>
      ),
    },
  },
];

export const contentsLength = reactContents.length;