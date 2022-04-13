import { memo } from "react/cjs/react.production.min";

const ShowPageContents = ({ isLargerTitle, title, text, url, anchor }) => {
  // Showing the text if there is h1 heading.
  if (isLargerTitle) {
    // Showing the text if there is h1 heading without url.
    if (url === "") {
      return (
        <article className="title">
          <h1 id={anchor}>{title}</h1>
          <div>{text.p1}</div>
        </article>
      );
    }
    // Showing the text if there is h1 heading with url.
    return (
      <article className="title">
        <h1 id={anchor}>
          <a href={url} target="blank">
            {title}
          </a>
        </h1>
        <div>{text.p1}</div>
      </article>
    );
  }

  // Showing the text if the url exits.
  if (url) {
    return (
      <article className="subtitle">
        <h3 id={anchor}>
          <a href={url} target="blank">
            {title}
          </a>
        </h3>
        <div>{text.p1}</div>
      </article>
    );
  }

  // Showing the text if there is only three paragraphs
  if (text.p3) {
    const { p1, p2, p3 } = text;
    return (
      <article className="subtitle">
        <h3 id={anchor}>{title}</h3>
        <div>{p1}</div>
        <div>{p2}</div>
        <div>{p3}</div>
      </article>
    );
  }

  // Showing the text if there is only two paragraphs
  if (text.p2) {
    return (
      <article className="subtitle">
        <h3 id={anchor}>{title}</h3>
        <div>{text.p1}</div>
        <div>{text.p2}</div>
      </article>
    );
  }

  // Showing the text if there is only one paragraphs(the default)
  return (
    <article className="subtitle">
      <h3 id={anchor}>{title}</h3>
      <div>{text.p1}</div>
    </article>
  );
};

export default memo(ShowPageContents);
