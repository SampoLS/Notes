import { memo } from "react";
import PageHead from "../../../components/PageHead";
import ShowPageContents from "../../../components/ShowPageContents";
import { httpContents } from "./httpContents";

import "./HttpPage.css";

// Showing the term contents.
const HttpPage = () => {
  return (
    <>
      <PageHead />
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
