import { memo } from "react";
import { Outlet } from "react-router-dom";
import PageHead from "../../../components/PageHead";
import Breadcrumbs from "../../../components/Breadcrumbs";

// Computer sicence terms page
const CsPage = () => {
  return (
    <>
      <PageHead />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <Breadcrumbs path="cs" />
    </>
  );
};

export default memo(CsPage);
