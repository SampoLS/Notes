import ShowPageContents from "../../../../components/ShowPageContents";
import { csContents } from "../csContents";

export default function SplitPageOne() {
  return (
    <main>
      <section>
        {csContents.slice(0, 15).map((item) => {
          return <ShowPageContents key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}
