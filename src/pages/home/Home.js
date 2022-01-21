import Card from "../../components/Card";
import { card } from "./card";

import "./home.css";

// Showing the home page, the single card
const Home = () => {
  return (
    <>
      <main className="container">
        <section className="term-section">
          {card.map((data) => {
            const { id, title, path, text } = data;
            return <Card key={id} title={title} path={path} text={text} />;
          })}
        </section>
      </main>
    </>
  );
};

export default Home;
