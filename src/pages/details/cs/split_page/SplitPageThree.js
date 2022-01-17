import ShowPageContents from "../../../../components/ShowPageContents";
import { csContents } from "../csContents";

export default function SplitPageThree() {
  return (
    <main>
      <section>
        {csContents.slice(30).map((item) => {
          return <ShowPageContents key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}
