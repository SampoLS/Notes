import { httpContents } from "../pages/details/http/httpContents";
import { reactContents } from "../pages/details/react/reactContents";
import { reactRouterContents } from "../pages/details/react_router/reactRouterContents";
import { typeScriptContents } from "../pages/details/typescript/typeScriptContents";
import { jsContents } from "../pages/details/javascript/javaScriptContents";
import { csContents } from "../pages/details/cs/csContents";
import { noteContents } from "../pages/details/notes/noteContents";
import { gitContents } from "../pages/details/git/gitContents";
import { termsContents } from "../pages/details/others/OtherTermsContents";

// Combine all the data together.
export const data = httpContents.concat(
  reactContents,
  reactRouterContents,
  typeScriptContents,
  jsContents,
  csContents,
  noteContents,
  gitContents,
  termsContents,
);
