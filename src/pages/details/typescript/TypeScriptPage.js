import { memo } from "react";
import { typeScriptContents } from "./typeScriptContents";
import ShowPageContents from "../../../components/ShowPageContents";

const TypeScriptPage = () => {
  return (
    <>
      {typeScriptContents.map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
    </>
  );
};
export default memo(TypeScriptPage);
