import React, { memo } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import HttpDetailsPage from "./pages/details/http_details/HttpPage";
import ReactPage from "./pages/details/react/ReactPage";
import ReactRouterPage from "./pages/details/react_router/ReactRouterPage";
import TypeScriptPage from "./pages/details/typescript/TypeScriptPage";
import JavaScriptPage from "./pages/details/javascript/JavaScriptPage";
import CsPage from "./pages/details/cs/CsPage";
import NotePage from "./pages/details/notes/NotePage";
import GitPage from "./pages/details/git/GitPage";
import NotFound from "./pages/details/not_found/NotFound";

import IndexRoutePage from "./components/IndexRoutePage";
import SplitPage from "./components/SplitPage";

// Importing the contents in different pages
import { csContents } from "./pages/details/cs/csContents";
import { reactRouterContents } from "./pages/details/react_router/reactRouterContents";
import { reactContents } from "./pages/details/react/reactContents";
import { jsContents } from "./pages/details/javascript/javaScriptContents";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="http" element={<HttpDetailsPage />} />
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
          <Route path="note" element={<NotePage />} />
          <Route path="git" element={<GitPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default memo(App);
