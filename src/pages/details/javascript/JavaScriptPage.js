import { memo } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./javaScriptContents";

// JavaScript page
const JavaScriptPage = () => {
  return (
    <>
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
