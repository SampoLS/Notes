import { memo } from "react";
import PageHead from "../../../components/PageHead";
import ShowPageContents from "../../../components/ShowPageContents";
import { reactContents } from "./reactContents";

// Showing the react page
const ReactPage = () => {
  return (
    <>
      <PageHead />
      <main>
        <section>
          {reactContents.map((item) => {
            return <ShowPageContents key={item.id} {...item} />;
          })}
        </section>
      </main>
    </>
  );
};
export default memo(ReactPage);
