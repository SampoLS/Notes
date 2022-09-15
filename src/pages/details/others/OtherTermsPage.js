import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./OtherTermsContents";

const OtherTermsPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="other_terms" length={contentsLength} />
    </>
  );
};
export default OtherTermsPage;
