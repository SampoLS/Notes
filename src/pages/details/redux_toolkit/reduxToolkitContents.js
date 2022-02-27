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
];

export const contentsLength = reduxToolkitContents.length;

let subpathContents = [];
export const reduxToolkitContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  reduxToolkitContents,
);
