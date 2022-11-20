import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./javaScriptContents";

// JavaScript page
const JavaScriptPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="javascript" length={contentsLength} />
    </>
  );
};

export default JavaScriptPage;
