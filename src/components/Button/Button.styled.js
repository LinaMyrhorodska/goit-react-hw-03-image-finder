import styled from "styled-components";

export const SearchBtn = styled.button`
margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  padding: 8px 16px;

  border-radius: 2px;
  background-color: yellow;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;

  display: block;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;

  :hover {
    background-color: green;
  }
`