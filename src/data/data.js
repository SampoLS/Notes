import { httpContents } from "../pages/details/http/httpContents";
import { reactContents } from "../pages/details/react/reactContents";
import { reactRouterContents } from "../pages/details/react_router/reactRouterContents";
import { reduxToolkitContents } from "../pages/details/redux_toolkit/reduxToolkitContents";
import { typeScriptContents } from "../pages/details/typescript/typeScriptContents";
import { jsContents } from "../pages/details/javascript/javaScriptContents";
import { csContents } from "../pages/details/cs/csContents";
import { noteContents } from "../pages/details/notes/noteContents";
import { gitContents } from "../pages/details/git/gitContents";
import { termsContents } from "../pages/details/others/OtherTermsContents";
import { dsContents } from "../pages/details/data_structure/dsContents";
import { algoContents } from "../pages/details/algorithms/algoContents";
import { webpackContents } from "../pages/details/webpack/webpackContents";
import { webComponentsContents } from "../pages/details/web_components/web_components_contents";
import { webTermsContents } from "../pages/details/web_terms/webTermsContents";
import { webglContents } from "../pages/details/webgl/webglContents";
import { mathContents } from "../pages/details/mathematics/mathContents";
import { physicsContents } from "../pages/details/physics/physicsContents";
import { logicContents } from "../pages/details/logic/logicContents";

// Combine all the data together.
export const data = httpContents.concat(
  reactContents,
  reactRouterContents,
  reduxToolkitContents,
  typeScriptContents,
  jsContents,
  csContents,
  noteContents,
  gitContents,
  termsContents,
  dsContents,
  algoContents,
  webpackContents,
  webComponentsContents,
  webglContents,
  mathContents,
  physicsContents,
  logicContents,
  webTermsContents
);
