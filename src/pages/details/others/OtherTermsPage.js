import ShowPageContents from "../../../components/ShowPageContents";
import { termsContents } from "./OtherTermsContents";

const OtherTermsPage = () => {
  return (
    <>
      {termsContents.map((item) => {
        return <ShowPageContents key={item.id} {...item} />;
      })}
    </>
  );
};
export default OtherTermsPage;
