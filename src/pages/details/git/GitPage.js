import ShowPageContents from "../../../components/ShowPageContents";
import { gitContents } from "./gitContents";

const GitPage = () => {
  return (
    <>
      <main>
        <section>
          {gitContents.map((item) => {
            return <ShowPageContents key={item.id} {...item} />;
          })}
        </section>
      </main>
    </>
  );
};
export default GitPage;
