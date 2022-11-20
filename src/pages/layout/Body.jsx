import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <main>
      <section>
        <Outlet />
      </section>
    </main>
  );
};
export default Body;
