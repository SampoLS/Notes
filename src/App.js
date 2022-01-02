import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/http" element={<HttpDetailsPage />} />
      <Route path="/react-router" element={<ReactRouterPage />} />
      <Route path="/react" element={<ReactPage />} />
      <Route path="/typescript" element={<TypeScriptPage />} />
      <Route path="/javascript" element={<JavaScriptPage />} />
      <Route path="/cs" element={<CsPage />} />
      <Route path="/note" element={<NotePage />} />
      <Route path="/git" element={<GitPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default memo(App);
