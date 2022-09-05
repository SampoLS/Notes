import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./philosophyContents";

// Computer sicence terms page
const PhilosophyPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="philosophy" length={contentsLength} />
    </>
  );
};

export default PhilosophyPage;
