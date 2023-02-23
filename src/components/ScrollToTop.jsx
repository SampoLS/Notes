import { forwardRef } from "react";
import { memo } from "react";
import styled from "styled-components";

const ScrollToTop = forwardRef((props, ref) => {
  const handleClickTop = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Box>
      <div onClick={handleClickTop}>Top</div>
    </Box>
  );
});

const Box = styled.section`
  div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
    color: #666;
    position: fixed;
    bottom: 10px;
    right: 4%;
    text-align: center;
    line-height: 80px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default memo(ScrollToTop);
