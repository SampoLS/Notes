import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dataLength } from "../pages/details/cs/csContents";

export default function Breadcrumbs({ path }) {
  const ref = useRef(null);
  let lastIndex = 0;
  const addStyle = (anchorLists, i) => {
    anchorLists[i].classList.add("active");
    anchorLists[lastIndex].classList.remove("active");
    lastIndex = i;
  }
  useEffect(() => {
    // Get the list of a elements.
    const anchorLists = ref.current.childNodes;
    for (let i = 0; i < anchorLists.length; i++) {
      anchorLists[i].addEventListener("click", () => {
        // Reset the scroll position to the top left of the document.
        window.scroll(0, 0);
        // Add the active class to next click element and remove the active class of the last click.
        addStyle(anchorLists, i);
      });
    }
    // Setting the style of the first a element.
    anchorLists[0].classList.add("active");
  });
  // Calculate the number of the total pages.
  const totalPages = dataLength / 15;
  // For holding the a link element.
  let links = [];
  // For storing the calculated the paths based on the number of total pages.
  const subPath = [];
  // Do a loop
  for (let i = 0; i < Math.ceil(totalPages); i++) {
    subPath.push("p" + (i + 1));
    const link = (
      <Link
        to={subPath[i] === "p1" ? `/${path}` : `/${path}/${subPath[i]}`}
        key={i}
      >
        {i + 1}
      </Link>
    );
    links.push(link);
  }
  return (
    <Footer>
      <section ref={ref}>{links}</section>
    </Footer>
  );
}

const Footer = styled.footer`
  section {
    width: 90%;
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      width: 40px;
      height: 30px;
      background: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
    .active {
      background-color: #333;
      color: white;
    }
  }
`;
