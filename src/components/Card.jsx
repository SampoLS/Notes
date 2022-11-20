import { Link } from "react-router-dom";
import { memo } from "react/cjs/react.production.min";

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
export default memo(Card);
