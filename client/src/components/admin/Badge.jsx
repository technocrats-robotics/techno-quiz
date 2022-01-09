import React from "react";
import styled from "styled-components";
import { themeColor } from "../utils";
function Badge({
  content,
  clean = false,
  logout = false,
  glow = false,
}) {
  return (
    <Div clean={clean} logout={logout} glow={glow} >
      {content}
    </Div>
  );
}

const Div = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${themeColor};
  cursor: pointer;
  ${({ clean }) =>
    clean &&
    `background-color: transparent;
    border: 0.05rem solid ${themeColor};
     color:${themeColor};`}
  ${({ logout }) =>
    logout &&
    `
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    font-weight: 500;
    color: #000;
    background-color: #FFFD1B;
    cursor: pointer;
    `}
  ${({ glow }) =>
    glow &&
    `
        font-size:0.8rem;
        padding:0.2rem 0.5rem;
        font-weight:normal;
          background-color: rgba(109, 134, 245, 0.192);
        color:#2f233d;
    `}
`;

export default Badge;
