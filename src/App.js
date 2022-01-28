import React, { memo } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Page from "./pages/layout/Page";
import Home from "./pages/home/Home";
import HttpPage from "./pages/details/http/HttpPage";
import ReactPage from "./pages/details/react/ReactPage";
import ReactRouterPage from "./pages/details/react_router/ReactRouterPage";
import TypeScriptPage from "./pages/details/typescript/TypeScriptPage";
import JavaScriptPage from "./pages/details/javascript/JavaScriptPage";
import CsPage from "./pages/details/cs/CsPage";
import GitPage from "./pages/details/git/GitPage";
import DsPage from "./pages/details/data_structure/DsPage";
import AlgoPage from "./pages/details/algorithms/AlgoPage";
import OtherTermsPage from "./pages/details/others/OtherTermsPage";
import NotePage from "./pages/details/notes/NotePage";
import NotFound from "./pages/details/not_found/NotFound";

import IndexRoutePage from "./components/IndexRoutePage";
import SplitPage from "./components/SplitPage";

// Import the contents in different pages for showing the contents based on the url(routing) when clicking the breadcrumbs.
import { csContents } from "./pages/details/cs/csContents";
import { reactRouterContents } from "./pages/details/react_router/reactRouterContents";
import { reactContents } from "./pages/details/react/reactContents";
import { jsContents } from "./pages/details/javascript/javaScriptContents";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="http" element={<HttpPage />} />
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
          <Route path="typescript" element={<TypeScriptPage />} />
          <Route path="javascript" element={<JavaScriptPage />}>
            <Route index element={<IndexRoutePage content={jsContents} />} />
            <Route path=":pId" element={<SplitPage content={jsContents} />} />
          </Route>
          <Route path="cs" element={<CsPage />}>
            <Route index element={<IndexRoutePage content={csContents} />} />
            <Route path=":pId" element={<SplitPage content={csContents} />} />
          </Route>
          <Route path="git" element={<GitPage />} />
          <Route path="data_structure" element={<DsPage />} />
          <Route path="algorithms" element={<AlgoPage />} />
          <Route path="other_terms" element={<OtherTermsPage />} />
          <Route path="note" element={<NotePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default memo(App);
