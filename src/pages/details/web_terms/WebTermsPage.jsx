import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./webTermsContents";

const WebTermsPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="web_terms" length={contentsLength} />
    </>
  );
};

export default WebTermsPage;
