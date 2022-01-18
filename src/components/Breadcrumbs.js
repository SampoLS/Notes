import { useCallback } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { dataLength } from "../pages/details/cs/csContents";

export default function Breadcrumbs({ path }) {
  // Click the a link to the top.
  const handleClickTop = useCallback(() => {
    // reset the scroll position to the top left of the document.
    window.scroll(0, 0);
  }, []);
  // Calculate the number of the total pages.
  const totalPages = dataLength / 15;
  // For holding the a link element.
  let links = [];
  // For storing the calculated the paths based on the number of total pages.
  const subPath = [];
  // Do a loop
  for (let i = 0; i < Math.ceil(totalPages); i++) {
    subPath.push("p" + (i + 1));
    // const link = (
    //   <NavLink to={`/${path}/${subPath[i]}`} key={i} onClick={handleClickTop}>
    //     {i + 1}
    //   </NavLink>
    // );
    const link = (
      <NavLink
        to={subPath[i] === "p1" ? `/${path}` : `/${path}/${subPath[i]}`}
        key={i}
        onClick={handleClickTop}
      >
        {i + 1}
      </NavLink>
    );
    links.push(link);
  }
  return (
    <Footer>
      <section>{links}</section>
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
