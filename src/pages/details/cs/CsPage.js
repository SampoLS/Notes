import { memo } from "react";
import { Outlet } from "react-router-dom";
import PageHead from "../../../components/PageHead";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./csContents";

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
      <Breadcrumbs path="cs" length={contentsLength} />
    </>
  );
};

export default memo(CsPage);
