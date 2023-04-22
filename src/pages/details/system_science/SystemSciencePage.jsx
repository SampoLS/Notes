import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./systemScienceContents";

const SystemSciencePage = () => {
    return (
        <>
            <Outlet />
            <Breadcrumbs path="systems_science" length={contentsLength} />
        </>
    );
};

export default SystemSciencePage;
