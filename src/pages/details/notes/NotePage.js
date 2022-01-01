import PageHead from "../../../components/PageHead";
import ShowPageContents from "../../../components/ShowPageContents";
import { noteContents } from "./noteContents";

const NotePage = () => {
  return (
    <>
      <PageHead />
      <main>
        <section>
          {noteContents.map((item) => {
            return <ShowPageContents key={item.id} {...item} />;
          })}
        </section>
      </main>
    </>
  );
};
export default NotePage;
