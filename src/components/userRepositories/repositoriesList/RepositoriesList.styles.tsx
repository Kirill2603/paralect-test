import styled from "styled-components";

export const RepositoriesListStyles = styled.div `
  flex: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    padding: 4vh 3vw;
    font-size: 2rem;
    font-weight: 600;
  }

  > ul {
    padding-left: 3vw;
    padding-right: 5vw;
    flex: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    li {
      padding: 3vh 2vw;

      a {
        color: #0064EB;
        font-size: 24px;
      }

      a:visited {
        color: #6200eb;
      }

      p {
        padding-top: 3vh;
        font-size: 16px;
      }
    }
  }
`
