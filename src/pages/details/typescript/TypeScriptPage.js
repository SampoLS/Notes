import { memo } from "react";
import PageHead from "../../../components/PageHead";
import { typeScriptContents } from "./typeScriptContents";
import ShowPageContents from "../../../components/ShowPageContents";

const TypeScriptPage = () => {
  return (
    <>
      <PageHead />
      <main>
        <section>
          {typeScriptContents.map((item) => {
            return <ShowPageContents key={item.id} {...item} />;
          })}
        </section>
      </main>
    </>
  );
};
export default memo(TypeScriptPage);
