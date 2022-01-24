import { data } from "../data/data";

// The popup page
const PopupPage = ({ spanRef, terms, isShowPopPage, setIsShowPopPage }) => {
  // if there is no value in input, let the popup page render nothing.
  if (terms.trim() === "") {
    return null;
  }
  // Filter the terms that the item title contains the input value.
  const filterdTerms = data.filter((item) => {
    // Item's title
    const title = item.title.toLowerCase();
    // return the items if the item' title includes the terms(input value).
    if (title.includes(terms.toLowerCase())) {
      return item;
    }
    return null;
  });

  return (
    <div className="pop-page">
      <section className="container">
        <section className="close-wrapper">
          <span className="close" ref={spanRef}>
            X
          </span>
        </section>
        <section className="terms-wrapper">
          {filterdTerms.map((item) => {
            return (
              <article key={item.id} className="term">
                <h3>
                  <a
                    href={`${item.path}#${item.anchor}`}
                    onClick={() => setIsShowPopPage(!isShowPopPage)}
                  >
                    {item.title}
                  </a>
                </h3>
                <div className="text-box">{item.text.p1}</div>
              </article>
            );
          })}
        </section>
      </section>
    </div>
  );
};
export default PopupPage;
