import { Link } from "react-router-dom";

// Showing single card contents
const Card = ({ title, path, text }) => {
  return (
    <article className="term">
      <h3>{title}</h3>
      <p>
        <Link to={path}>{text}</Link>
      </p>
    </article>
  );
};
export default Card;
