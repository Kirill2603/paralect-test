import styled from 'styled-components';

import nexIco from 'assets/icons/nextIco.svg';
import prevIco from 'assets/icons/prevIco.svg';

export const PaginationStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 3vh 5vw;

  ul {
    text-align: center;

    li {
      display: inline-block;
      margin: 0 6px 0 6px;
      height: 25px;
      width: 21px;
      cursor: pointer;

      a {
        font-size: 14px;
        line-height: 25px;
        color: #808080;
      }
    }

    > li:nth-last-child(1) {
      background-image: url(${nexIco});
      background-repeat: no-repeat;
      background-size: 8px;
      background-position-y: center;
      background-position-x: center;
      margin: 0 0 0 2vw;

      a {
        opacity: 0;
      }
    }

    > li:nth-child(1) {
      background-image: url(${prevIco});
      background-repeat: no-repeat;
      background-size: 8px;
      background-position-y: center;
      background-position-x: center;
      margin: 0 2vw 0 0;

      a {
        opacity: 0;
      }
    }
  }

  .active {
    background-color: blue;
    border-radius: 3px;

    a {
      color: white;
    }
  }

  p {
    padding-right: 2vw;
    font-size: 14px;
    line-height: 25px;
    color: #808080;
  }

  @media (max-width: 880px) {
    flex-direction: column;
    justify-content: center;
    padding: 1vh 1vw;
  }
`;
