import { useCallback, useEffect, useRef, useState, memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import PopupPage from "./PopupPage";
import ScrollToTop from "./ScrollToTop";

// The page head, include logo, search bar.
const PageHead = () => {
  // The state of input value.
  const [terms, setTerms] = useState("");
  // A boolean value to control to show or hide the page.
  const [isShowPopPage, setIsShowPopPage] = useState(false);
  // Get the span(close btn) element.
  const spanRef = useRef(null);
  // Get the input(value) element.
  const inputRef = useRef(null);
  // Get the header element
  const headRef = useRef(null);

  // Close the popup page.
  const hidePopPage = useCallback(() => {
    window.addEventListener("click", (e) => {
      if (e.target.matches(".close")) {
        setIsShowPopPage(!isShowPopPage);
      }
    });
  }, [setIsShowPopPage, isShowPopPage]);

  useEffect(() => {
    const section = document.getElementById("breadcrumbs");
    if (section) {
      const anchor = section.firstChild;
      anchor.classList.remove("active");
    }
    const span = spanRef.current;
    // Close the popup page.
    if (isShowPopPage && span) {
      span.addEventListener("click", hidePopPage);
    }
    if (span) {
      return () => {
        span.removeEventListener("click", hidePopPage);
      };
    }
  }, [terms, isShowPopPage, hidePopPage]);

  // Show the popup page if there is value in input when click the button.
  const showPopPage = useCallback(() => {
    if (inputRef.current.value.trim()) {
      setIsShowPopPage(true);
    }
  }, [setIsShowPopPage]);

  return (
    <>
      <Bar>
        <Header ref={headRef}>
          <Link to="/">🎀 𝒯𝑒𝓇𝓂𝓈 𝐵𝒶𝓃𝓀 🎀</Link>
          <div>
            <input
              type="search"
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
              placeholder="Search..."
              ref={inputRef}
            />
            <button onClick={showPopPage}>search</button>
          </div>
        </Header>
        <ScrollToTop ref={headRef} />
      </Bar>
      {isShowPopPage ? (
        <PopupPage
          spanRef={spanRef}
          terms={terms}
          isShowPopPage={isShowPopPage}
          setIsShowPopPage={setIsShowPopPage}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default memo(PageHead);

const Bar = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 2px 0 10px #eee;
  overflow: hidden;
`;

const Header = styled.header`
  width: 90%;
  margin: 0 auto;
  font-size: calc(1rem + 2vw);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 100px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: initial;
  }

  div {
    justify-self: end;
    display: flex;
    @media (max-width: 768px) {
      justify-self: start;
    }

    input {
      padding: 10px;
      border: none;
      border-bottom: 1px solid #ddd;
      outline: none;
      caret-color: #888;
      font-family: roboto;
    }
    button {
      border: none;
      padding: 10px;
      background-color: #eee;
      color: #555;
      cursor: pointer;
      font-family: roboto;
    }
  }
`;
