import { httpContents } from "../pages/details/http/httpContents";
import { reactContentsAddedSubpath } from "../pages/details/react/reactContents";
import { reactRouterContentsAddedSubpath } from "../pages/details/react_router/reactRouterContents";
import { reduxToolkitContentsAddedSubpath } from "../pages/details/redux_toolkit/reduxToolkitContents";
import { typeScriptContents } from "../pages/details/typescript/typeScriptContents";
import { jsContentsAddedSubpath } from "../pages/details/javascript/javaScriptContents";
import { csContentsAddedSubpath } from "../pages/details/cs/csContents";
import { noteContents } from "../pages/details/notes/noteContents";
import { gitContents } from "../pages/details/git/gitContents";
import { termsContents } from "../pages/details/others/OtherTermsContents";
import { dsContents } from "../pages/details/data_structure/dsContents";
import { algoContents } from "../pages/details/algorithms/algoContents";
import { webComponentsContents } from "../pages/details/web_components/web_components_contents";
import { webTermsContents } from "../pages/details/web_terms/webTermsContents";

// Combine all the data together.
export const data = httpContents.concat(
  reactContentsAddedSubpath,
  reactRouterContentsAddedSubpath,
  reduxToolkitContentsAddedSubpath,
  typeScriptContents,
  jsContentsAddedSubpath,
  csContentsAddedSubpath,
  noteContents,
  gitContents,
  termsContents,
  dsContents,
  algoContents,
  webComponentsContents,
  webTermsContents,
);
