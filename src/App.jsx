import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Page from "./pages/layout/Page";
import Home from "./pages/home/Home";
import HttpPage from "./pages/details/http/HttpPage";
import ReactPage from "./pages/details/react/ReactPage";
import ReactRouterPage from "./pages/details/react_router/ReactRouterPage";
import ReduxToolkit from "./pages/details/redux_toolkit/ReduxToolkitPage";
import TypeScriptPage from "./pages/details/typescript/TypeScriptPage";
import JavaScriptPage from "./pages/details/javascript/JavaScriptPage";
import AsyncJs from "./pages/details/asynchronous_js/AsyncJs";
import CsPage from "./pages/details/cs/CsPage";
import GitPage from "./pages/details/git/GitPage";
import DsPage from "./pages/details/data_structure/DsPage";
import AlgoPage from "./pages/details/algorithms/AlgoPage";
import WebpackPage from "./pages/details/webpack/WebpackPage";
import WebComponents from "./pages/details/web_components/WebComponents";
import WebTermsPage from "./pages/details/web_terms/WebTermsPage";
import WebGLPage from "./pages/details/webgl/WebGLPage";
import MathPage from "./pages/details/mathematics/MathPage";
import PhysicsPage from "./pages/details/physics/PhysicsPage";
import LogicPage from "./pages/details/logic/LogicPage";
import LinguisticsPage from "./pages/details/linguistics/LinguisitcsPage";
import PhilosophyPage from "./pages/details/philosophy/PhilosophyPage";
import OtherTermsPage from "./pages/details/others/OtherTermsPage";
import EnPage from "./pages/details/english/EnPage";
import CgPage from "./pages/details/computer_graphics/CgPage";
import NotePage from "./pages/details/notes/NotePage";
import NotFound from "./pages/details/not_found/NotFound";
import GeometryPage from "./pages/details/geometry/GeometryPage";
import CalculusPage from "./pages/details/calculus/CalculusPage";
import AlgebraPage from "./pages/details/algebra/AlgebraPage";
import MathAnalysisPage from "./pages/details/math_analysis/MathAnalysisPage";
import OopPage from "./pages/details/oop/OopPage";
import PsychologyPage from "./pages/details/psychology/PsychologyPage";

import IndexRoutePage from "./components/IndexRoutePage";
import SplitPage from "./components/SplitPage";

// Import the contents in different pages for showing the contents based on the url(routing) when clicking the breadcrumbs.
import { csContents } from "./pages/details/cs/csContents";
import { reactContents } from "./pages/details/react/reactContents";
import { reactRouterContents } from "./pages/details/react_router/reactRouterContents";
import { reduxToolkitContents } from "./pages/details/redux_toolkit/reduxToolkitContents";
import { jsContents } from "./pages/details/javascript/javaScriptContents";
import { httpContents } from "./pages/details/http/httpContents";
import { webpackContents } from "./pages/details/webpack/webpackContents";
import { webTermsContents } from "./pages/details/web_terms/webTermsContents";
import { webglContents } from "./pages/details/webgl/webglContents";
import { physicsContents } from "./pages/details/physics/physicsContents";
import { logicContents } from "./pages/details/logic/logicContents";
import { linguisticsContents } from "./pages/details/linguistics/linguisticsContents";
import { philosophyContents } from "./pages/details/philosophy/philosophyContents";
import { mathContents } from "./pages/details/mathematics/mathContents";
import { termsContents } from "./pages/details/others/OtherTermsContents";
import { enContents } from "./pages/details/english/enContents";
import { cgContents } from "./pages/details/computer_graphics/cgContents";
import { geometryContents } from "./pages/details/geometry/geometryContents";
import { calculusContents } from "./pages/details/calculus/calculusContents";
import { algebraContents } from "./pages/details/algebra/algebraContents";
import { mathAnalysisContents } from "./pages/details/math_analysis/mathAnalysisContents";
import { oopContents } from "./pages/details/oop/oopContents";
import { psychologyContents } from "./pages/details/psychology/psychologyContents";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="http" element={<HttpPage />}>
            <Route index element={<IndexRoutePage content={httpContents} />} />
            <Route path=":pId" element={<SplitPage content={httpContents} />} />
          </Route>
          <Route path="react-router" element={<ReactRouterPage />}>
            <Route
              index
              element={<IndexRoutePage content={reactRouterContents} />}
            />
            <Route
              path=":pId"
              element={<SplitPage content={reactRouterContents} />}
            />
          </Route>
          <Route path="react" element={<ReactPage />}>
            <Route index element={<IndexRoutePage content={reactContents} />} />
            <Route
              path=":pId"
              element={<SplitPage content={reactContents} />}
            />
          </Route>
          <Route path="redux_toolkit" element={<ReduxToolkit />}>
            <Route
              index
              element={<IndexRoutePage content={reduxToolkitContents} />}
            />
          </Route>
          <Route path="typescript" element={<TypeScriptPage />} />
          <Route path="javascript" element={<JavaScriptPage />}>
            <Route index element={<IndexRoutePage content={jsContents} />} />
            <Route path=":pId" element={<SplitPage content={jsContents} />} />
          </Route>
          <Route path="asynchronous_js" element={<AsyncJs />} />
          <Route path="cs" element={<CsPage />}>
            <Route index element={<IndexRoutePage content={csContents} />} />
            <Route path=":pId" element={<SplitPage content={csContents} />} />
          </Route>
          <Route path="oop" element={<OopPage />}>
            <Route index element={<IndexRoutePage content={oopContents} />} />
            <Route path=":pId" element={<SplitPage content={oopContents} />} />
          </Route>
          <Route path="git" element={<GitPage />} />
          <Route path="data_structure" element={<DsPage />} />
          <Route path="algorithms" element={<AlgoPage />} />
          <Route path="webpack" element={<WebpackPage />}>
            <Route
              index
              element={<IndexRoutePage content={webpackContents} />}
            />
            <Route
              path=":pId"
              element={<SplitPage content={webpackContents} />}
            />
          </Route>
          <Route path="web_components" element={<WebComponents />} />
          <Route path="web_terms" element={<WebTermsPage />}>
            <Route
              index
              element={<IndexRoutePage content={webTermsContents} />}
            />
            <Route
              path=":pId"
              element={<SplitPage content={webTermsContents} />}
            />
          </Route>
          <Route path="webgl" element={<WebGLPage />}>
            <Route index element={<IndexRoutePage content={webglContents} />} />
            <Route
              path=":pId"
              element={<SplitPage content={webglContents} />}
            />
          </Route>
          <Route path="math" element={<MathPage />}>
            <Route index element={<IndexRoutePage content={mathContents} />} />
            <Route path=":pId" element={<SplitPage content={mathContents} />} />
          </Route>
          <Route path="physics" element={<PhysicsPage />}>
            <Route
              index
              element={<IndexRoutePage content={physicsContents} />}
            />
            <Route
              path=":pId"
              element={<SplitPage content={physicsContents} />}
            />
          </Route>
          <Route path="logic" element={<LogicPage />}>
            <Route index element={<IndexRoutePage content={logicContents} />} />
            <Route
              path=":pId"
              element={<SplitPage content={logicContents} />}
            />
          </Route>
          <Route path="linguistics" element={<LinguisticsPage />}>
            <Route
              index
              element={<IndexRoutePage content={linguisticsContents} />}
            />
            <Route
              path=":pId"
              element={<SplitPage content={linguisticsContents} />}
            />
          </Route>
          <Route path="philosophy" element={<PhilosophyPage />}>
            <Route
              index
              element={<IndexRoutePage content={philosophyContents} />}
            />
            <Route
              path=":pId"
              element={<SplitPage content={philosophyContents} />}
            />
          </Route>
          <Route path="other_terms" element={<OtherTermsPage />}>
            <Route index element={<IndexRoutePage content={termsContents} />} />
            <Route
              path=":pId"
              element={<SplitPage content={termsContents} />}
            />
          </Route>
          <Route path="english" element={<EnPage />}>
            <Route index element={<IndexRoutePage content={enContents} />} />
            <Route path=":pId" element={<SplitPage content={enContents} />} />
          </Route>
          <Route path="cg" element={<CgPage />}>
            <Route index element={<IndexRoutePage content={cgContents} />} />
            <Route path=":pId" element={<SplitPage content={cgContents} />} />
          </Route>
          <Route path="geometry" element={<GeometryPage />}>
            <Route index element={<IndexRoutePage content={geometryContents} />} />
            <Route path=":pId" element={<SplitPage content={geometryContents} />} />
          </Route>
          <Route path="calculus" element={<CalculusPage />}>
            <Route index element={<IndexRoutePage content={calculusContents} />} />
            <Route path=":pId" element={<SplitPage content={calculusContents} />} />
          </Route>
          <Route path="algebra" element={<AlgebraPage />}>
            <Route index element={<IndexRoutePage content={algebraContents} />} />
            <Route path=":pId" element={<SplitPage content={algebraContents} />} />
          </Route>
          <Route path="math_analysis" element={<MathAnalysisPage />}>
            <Route index element={<IndexRoutePage content={mathAnalysisContents} />} />
            <Route path=":pId" element={<SplitPage content={mathAnalysisContents} />} />
          </Route>
          <Route path="psychology" element={<PsychologyPage />}>
            <Route index element={<IndexRoutePage content={psychologyContents} />} />
            <Route path=":pId" element={<SplitPage content={psychologyContents} />} />
          </Route>
          <Route path="note" element={<NotePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
