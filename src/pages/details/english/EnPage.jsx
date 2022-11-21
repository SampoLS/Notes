import ShowPageContents from "../../../components/ShowPageContents";
import { enContents } from "./enContents";

export default function EnPage() {
  return (
    <>
      {enContents.map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
    </>
  );
}
