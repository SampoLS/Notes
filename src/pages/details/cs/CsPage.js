import { memo } from "react";
import PageHead from "../../../components/PageHead";
import ShowPageContents from "../../../components/ShowPageContents";
import { csContents } from "./csContents";

// Computer sicence terms page
const CsPage = () => {
  return (
    <>
      <PageHead />
      <main>
        <section>
          {csContents.map((item) => {
            return <ShowPageContents key={item.id} {...item} />;
          })}
        </section>
      </main>
    </>
  );
};

export default memo(CsPage);
