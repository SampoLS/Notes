import { memo, useEffect } from "react";
import PageHead from "../../../components/PageHead";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Outlet, useNavigate } from "react-router-dom";

// Computer sicence terms page
const CsPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/cs/p1");
  }, []);
  return (
    <>
      <PageHead />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <Breadcrumbs />
    </>
  );
};

export default memo(CsPage);
