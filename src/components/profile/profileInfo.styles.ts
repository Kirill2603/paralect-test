import styled from "styled-components";

export const ProfileInfoStyles = styled.div`
  flex: content-box;
  padding: 5vh 4vw;
  display: flex;
  flex-direction: column;
  >img {
    height: 280px;
    width: 280px;
    min-width: 280px;
    border-radius: 50%;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 3vh 0 2vh 0;
  }
  a {
    color: #0064EB;
    font-size: 1.1rem;
  }

  a:visited {
    color: #6200eb;
  }
  .follows {
    padding: 3vh 0 0 0;
    display: flex;
    justify-content: space-between;
    img {
      height: 24px;
    }
    p {
      padding-left: 8px;
      font-size: 1rem;
    }
    div {
      display: flex;
      align-items: center;
    }
  }
  @media (max-width: 700px) {
    flex: content-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1vh 0;
    >img {
      min-width: 120px;
      width: 120px;
      height: 120px;
      margin: 0 5vw;
    }
    h2 {
      padding: 0;
    }
    .follows {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`
