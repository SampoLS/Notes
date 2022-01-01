import { memo } from "react";
import PageHead from "../../../components/PageHead";
import ShowPageContents from "../../../components/ShowPageContents";
import { javaScriptContents } from "./javaScriptContents";

// JavaScript page
const JavaScriptPage = () => {
  return (
    <>
      <PageHead />
      <main>
        <section>
          {javaScriptContents.map((item) => {
            return <ShowPageContents key={item.id} {...item} />;
          })}
        </section>
      </main>
    </>
  );
};

export default memo(JavaScriptPage);
