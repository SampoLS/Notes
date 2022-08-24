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
import OtherTermsPage from "./pages/details/others/OtherTermsPage";
import NotePage from "./pages/details/notes/NotePage";
import NotFound from "./pages/details/not_found/NotFound";

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
          <Route path="math" element={<MathPage />} />
          <Route path="other_terms" element={<OtherTermsPage />} />
          <Route path="note" element={<NotePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
