import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { dataLength } from "../pages/details/cs/csContents";

export default function Breadcrumbs() {
  const totalPage = dataLength / 15;
  let links = [];
  const subPath = ["p1", "p2", "p3"];
  for (let i = 0; i <= totalPage; i++) {
    // const link =
    //   subPath[i] === "p1" ? (
    //     <NavLink to="/cs" key={i}>
    //       {i + 1}
    //     </NavLink>
    //   ) : (
    //     <NavLink to={`/cs/${subPath[i]}`} key={i}>
    //       {i + 1}
    //     </NavLink>
    //   );
    const link = (
      <NavLink to={`/cs/${subPath[i]}`} key={i}>
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
