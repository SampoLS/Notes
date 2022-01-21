import { memo } from "react";
import ShowPageContents from "../../../components/ShowPageContents";
import { httpContents } from "./httpContents";

import "./HttpPage.css";

// Showing the term contents.
const HttpPage = () => {
  return (
    <>
      <main>
        <section>
          {httpContents.map((item) => {
            return <ShowPageContents key={item.id} {...item} />;
          })}
        </section>
      </main>
    </>
  );
};
export default memo(HttpPage);
