import ShowPageContents from "../../../components/ShowPageContents";
import { dsContents } from "./dsContents";

export default function DsPage() {
  return (
    <>
      {dsContents.map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
    </>
  );
}
