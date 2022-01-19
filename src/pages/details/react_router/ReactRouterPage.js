import { memo } from "react";
import PageHead from "../../../components/PageHead";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Outlet } from "react-router-dom";
import { contentsLength } from "./reactRouterContents";

// Showing the react router page contents
const ReactRouterPage = () => {
  return (
    <>
      <PageHead />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <Breadcrumbs path="react-router" length={contentsLength}/>
    </>
  );
};
export default memo(ReactRouterPage);
