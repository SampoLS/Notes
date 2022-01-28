import ShowPageContents from "../../../components/ShowPageContents";
import { algoContents } from "./algoContents";

export default function AlgoPage() {
  return (
    <>
      {algoContents.map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
    </>
  );
}
