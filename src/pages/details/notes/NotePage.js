import ShowPageContents from "../../../components/ShowPageContents";
import { noteContents } from "./noteContents";

const NotePage = () => {
  return (
    <>
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
