import { memo } from "react";
import PageHead from "../../../components/PageHead";
import ShowTermContents from "../../../components/ShowPageContents";
import { reactRouterContents } from "./reactRouterContents";

// Showing the react router page contents
const ReactRouterPage = () => {
  return (
    <>
      <PageHead />
      <main>
        <section>
          {reactRouterContents.map((item) => {
            return <ShowTermContents key={item.id} {...item} />;
          })}
        </section>
      </main>
    </>
  );
};
export default memo(ReactRouterPage);
