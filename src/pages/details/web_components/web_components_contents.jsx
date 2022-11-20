import { v4 as uuidv4 } from "uuid";

export const webComponentsContents = [
  {
    id: uuidv4(),
    title: "Web Components",
    isLargerTitle: true,
    path: "/web_components",
    url: "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
    anchor: "web_components",
    text: {
      p1: (
        <p>
          Web Components is a suite of different technologies allowing you to
          create reusable custom elements — with their functionality
          encapsulated away from the rest of your code — and utilize them in
          your web apps.
        </p>
      ),
    },
  },
];

export const contentsLength = webComponentsContents.length;
