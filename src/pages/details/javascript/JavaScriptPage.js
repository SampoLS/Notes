import { memo } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import PageHead from "../../../components/PageHead";
import { contentsLength } from "./javaScriptContents";

// JavaScript page
const JavaScriptPage = () => {
  return (
    <>
      <PageHead />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <Breadcrumbs path="javascript" length={contentsLength} />
    </>
  );
};

export default memo(JavaScriptPage);
