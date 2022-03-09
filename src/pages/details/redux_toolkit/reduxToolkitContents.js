import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const reduxUrl = "https://redux.js.org/tutorials";

export const reduxToolkitContents = [
  {
    id: uuidv4(),
    title: "Redux Toolkit",
    isLargerTitle: true,
    path: "/redux_toolkit",
    url: "https://redux-toolkit.js.org/",
    anchor: "redux_toolkit",
    text: {
      p1: (
        <>
          <p>
            Redux is a pattern and library for managing and updating application
            state, using events called "actions". It serves as a centralized
            store for state that needs to be used across your entire
            application, with rules ensuring that the state can only be updated
            in a predictable fashion.
          </p>
          <p>
            The whole global state of your app is stored in an object tree
            inside a <i>single store</i>. The only way to change the state tree
            is to create an <i>action</i>, an object describing what happened,
            and <i>dispatch</i> it to the store. To specify how state gets
            updated in response to an action, you write pure <i>reducer</i>{" "}
            functions that calculate a new state based on the old state and the
            action.
          </p>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "State Management",
    isLargerTitle: false,
    path: "/redux_toolkit",
    url: `${reduxUrl}/essentials/part-1-overview-concepts#state-management`,
    anchor: "state_management",
    text: {
      p1: (
        <ol className="list">
          <li>
            The <strong>state</strong>, the source of truth that drives our app;
          </li>
          <li>
            The <strong>view</strong>, a declarative description of the UI based
            on the current state;
          </li>
          <li>
            The <strong>actions</strong>, the events that occur in the app based
            on user input, and trigger updates in the state.
          </li>
        </ol>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "one-way data flow",
    isLargerTitle: false,
    path: "/redux_toolkit",
    url: `${reduxUrl}/essentials/part-1-overview-concepts#state-management`,
    anchor: "one-way_data_flow",
    text: {
      p1: (
        <ol className="list">
          <li>
            State describes the condition of the app at a specific point in
            time.
          </li>
          <li>
            State describes the condition of the app at a specific point in
            time.
          </li>
          <li>
            When something happens (such as a user clicking a button), the state
            is updated based on what occurred.
          </li>
          <li>The UI re-renders based on the new state.</li>
        </ol>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Actions",
    isLargerTitle: false,
    path: "/redux_toolkit",
    url: `${reduxUrl}/essentials/part-1-overview-concepts#actions`,
    anchor: "Actions",
    text: {
      p1: (
        <>
          <p>
            An action is a plain JavaScript object that has a "type" field. You
            can think of an action as an event that describes something that
            happened in the application.
          </p>
          <p>
            The "type" field should be a string that gives this action a
            descriptive name, like "todos/todoAdded". We usually write that type
            string like "domain/eventName", where the first part is the feature
            or category that this action belongs to, and the second part is the
            specific thing that happened.
          </p>
          <p>
            An action object can have other fields with additional information
            about what happened. By convention, we put that information in a
            field called "payload".
          </p>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Action Creators",
    isLargerTitle: false,
    path: "/redux_toolkit",
    url: `${reduxUrl}/essentials/part-1-overview-concepts#action-creators`,
    anchor: "Action_Creators",
    text: {
      p1: (
        <p>
          An action creator is a function that creates and returns an action
          object. We typically use these so we don't have to write the action
          object by hand every time.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Reducers",
    isLargerTitle: false,
    path: "/redux_toolkit",
    url: `${reduxUrl}/essentials/part-1-overview-concepts#reducers`,
    anchor: "Reducers",
    text: {
      p1: (
        <p>
          A reducer is a function that receives the current state and an action
          object, decides how to update the state if necessary, and returns the
          new state: (state, action) =&gt; newState. You can think of a reducer
          as an event listener which handles events based on the received action
          (event) type.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Store",
    isLargerTitle: false,
    path: "/redux_toolkit",
    url: `${reduxUrl}/essentials/part-1-overview-concepts#store`,
    anchor: "Store",
    text: {
      p1: (
        <p>
          The current Redux application state lives in an object called the
          store. The store is created by passing in a reducer, and has a method
          called "getState" that returns the current state value.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Dispatch",
    isLargerTitle: false,
    path: "/redux_toolkit",
    url: `${reduxUrl}/essentials/part-1-overview-concepts#dispatch`,
    anchor: "Dispatch",
    text: {
      p1: (
        <>
          <p>
            The Redux store has a method called "dispatch". The only way to
            update the state is to call "store.dispatch()" and pass in an action
            object. The store will run its reducer function and save the new
            state value inside, and we can call "getState()" to retrieve the
            updated value.
          </p>
          <p>
            You can think of dispatching actions as "triggering an event" in the
            application. Something happened, and we want the store to know about
            it. Reducers act like event listeners, and when they hear an action
            they are interested in, they update the state in response.
          </p>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Selectors",
    isLargerTitle: false,
    path: "/redux_toolkit",
    url: `${reduxUrl}/essentials/part-1-overview-concepts#selectors`,
    anchor: "Selectors",
    text: {
      p1: (
        <p>
          Selectors are functions that know how to extract specific pieces of
          information from a store state value. As an application grows bigger,
          this can help avoid repeating logic as different parts of the app need
          to read the same data.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Redux Slices",
    isLargerTitle: false,
    path: "/redux_toolkit",
    url: `${reduxUrl}/essentials/part-2-app-structure#redux-slices`,
    anchor: "Redux_Slices",
    text: {
      p1: (
        <p>
          A "slice" is a collection of Redux reducer logic and actions for a
          single feature in your app, typically defined together in a single
          file. The name comes from splitting up the root Redux state object
          into multiple "slices" of state.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Thunk",
    isLargerTitle: false,
    path: "/redux_toolkit",
    url: `https://redux.js.org/usage/writing-logic-thunks`,
    anchor: "thunk",
    text: {
      p1: (
        <p>
          The word "thunk" is a programming term that means "a piece of code
          that does some delayed work". Rather than execute some logic now, we
          can write a function body or code that can be used to perform the work
          later. For Redux specifically,{" "}
          <strong>
            "thunks" are a pattern of writing functions with logic inside that
            can interact with a Redux store's dispatch and getState methods.
          </strong>
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Thunk Functions",
    isLargerTitle: false,
    path: "/redux_toolkit",
    url: `${reduxUrl}/essentials/part-5-async-logic#thunk-functions`,
    anchor: "thunk_functions",
    text: {
      p1: (
        <>
          <p>
            A thunk function is a function that accepts two arguments: the Redux
            store "dispatch" method, and the Redux store "getState" method.
            Thunk functions are not directly called by application code.
            Instead, they are passed to store.dispatch(). A thunk function may
            contain any arbitrary logic, sync or async, and can call "dispatch"
            or "getState" at any time.
          </p>
          <p>
            Lets you write plain functions that may contain async logic
            directly. Once the thunk middleware has been added to the Redux
            store, it allows you to pass thunk functions directly to
            store.dispatch. A thunk function will always be called with
            (dispatch, getState) as its arguments, and you can use them inside
            the thunk as needed. Thunks typically dispatch plain actions using
            action creators, like dispatch(increment()).
          </p>
          <p>
            For consistency with dispatching normal action objects, we typically
            write these as thunk action creators, which return the thunk
            function. These action creators can take arguments that can be used
            inside the thunk.
          </p>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Thunk action creators",
    isLargerTitle: false,
    path: "/redux_toolkit",
    url: `https://redux.js.org/usage/writing-logic-thunks`,
    anchor: "thunk_action_creators",
    text: {
      p1: (
        <p>
          In the same way that Redux code normally uses action creators to
          generate action objects for dispatching instead of writing action
          objects by hand, we normally use thunk action creators to generate the
          thunk functions that are dispatched. A thunk action creator is a
          function that may have some arguments, and returns a new thunk
          function. The thunk typically closes over any arguments passed to the
          action creator, so they can be used in the logic.
        </p>
      ),
    },
  },
];

export const contentsLength = reduxToolkitContents.length;

let subpathContents = [];
export const reduxToolkitContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  reduxToolkitContents,
);
