import { memo } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./csContents";

// Computer sicence terms page
const CsPage = () => {
  return (
    <>
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
