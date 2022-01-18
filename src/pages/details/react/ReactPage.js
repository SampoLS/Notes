import { memo } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import PageHead from "../../../components/PageHead";

// Showing the react page
const ReactPage = () => {
  return (
    <>
      <PageHead />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <Breadcrumbs path="react" />
    </>
  );
};
export default memo(ReactPage);
