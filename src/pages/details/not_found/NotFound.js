import { memo } from "react";
import PageHead from "../../../components/PageHead";

const NotFound = () => {
  return (
    <>
      <PageHead />
      <main>
        <section>
          <h1>Not Found</h1>
        </section>
      </main>
    </>
  );
};

export default memo(NotFound);
