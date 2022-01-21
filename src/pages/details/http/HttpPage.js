import { memo } from "react";
import ShowPageContents from "../../../components/ShowPageContents";
import { httpContents } from "./httpContents";

import "./HttpPage.css";

// Showing the term contents.
const HttpPage = () => {
  return (
    <>
      {httpContents.map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
    </>
  );
};
export default memo(HttpPage);
