import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./linguisticsContents";

const LinguisticsPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="linguistics" length={contentsLength} />
    </>
  );
};

export default LinguisticsPage;
