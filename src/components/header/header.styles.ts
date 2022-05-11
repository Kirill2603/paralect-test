import styled from "styled-components";

import searchIco from 'assets/icons/searchIco.svg'

export const HeaderStyle = styled.header`
  background-color: #0064eb;
  height: 72px;
  min-height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3vw;
  img {
    width: 40px;
    height: 40px;
  }

  input {
    padding: 0 0 0 45px;
    margin: 0 2vw;
    height: 40px;
    width: 35vw;
    border: 0;
    outline: none;
    border-radius: 6px;
    background: url(${searchIco}) white no-repeat center left 15px;
    background-size: auto 50%;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }
  @media (max-width: 700px) {
    height: 52px;
    min-height: 52px;
    input {
      width: 55vw;
    }
  }
`;
