import { useParams } from "react-router-dom";
import ShowPageContents from "../../../../components/ShowPageContents";
import { csContents } from "../csContents";

export default function SplitPageOne() {
  const { pId } = useParams();
  switch (pId) {
    case "p2": {
      return (
        <main>
          <section>
            {csContents.slice(15, 30).map((item) => {
              return <ShowPageContents key={item.id} {...item} />;
            })}
          </section>
        </main>
      );
    }
    case "p3": {
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
    default:
      break;
  }
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
