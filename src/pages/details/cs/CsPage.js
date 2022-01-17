import { memo, useEffect } from "react";
import PageHead from "../../../components/PageHead";
// import ShowPageContents from "../../../components/ShowPageContents";
import Breadcrumbs from "../../../components/Breadcrumbs";
// import { csContents } from "./csContents";
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
      {/* <main>
        <section>
          {csContents.map((item) => {
            return <ShowPageContents key={item.id} {...item} />;
          })}
        </section>
      </main> */}
      <Outlet />
      <Breadcrumbs />
    </>
  );
};

export default memo(CsPage);
