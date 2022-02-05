import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ShowPageContents from "../../../components/ShowPageContents";
import {
  contentsLength,
  webComponentsContents,
} from "./web_components_contents";

const WebComponents = () => {
  return (
    <>
      {webComponentsContents.map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
      <Outlet />
      <Breadcrumbs path="web_components" length={contentsLength} />
    </>
  );
};
export default WebComponents;
