import React from "react";
import styled from '@emotion/styled'

function Badge({ content, clean = false, logout = false, quiz = false, glow = false }) {
  return (
    <Div clean={clean} logout={logout} quiz={quiz} glow={glow}>
      {content}
    </Div>
  );
}

const Div = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: #6100d4;
  cursor: pointer;
  ${({ clean }) =>
    clean &&
    `background-color: transparent;
    border: 0.05rem solid #6100d4;
     color: #6100d4;`}
  ${({ logout }) =>
    logout &&
    `
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    font-weight: 500;
    width: 100px;
    margin: 30px 60px;
    text-align: center;
    color: #000;
    background-color: #FFFD1B;
    cursor: pointer;
    `}
    ${({ quiz}) =>
    quiz &&
    `
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    font-weight: 500;
    width: 100px;
    margin: 30px 60px;
    text-align: center;
    color: #FFF;
    background-color: #0CBC8B;
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
