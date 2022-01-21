import { memo } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./reactContents";

// Showing the react page
const ReactPage = () => {
  return (
    <>
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <Breadcrumbs path="react" length={contentsLength} />
    </>
  );
};
export default memo(ReactPage);
