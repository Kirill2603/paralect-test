import styled from "styled-components";

export const ProfileInfoStyles = styled.div`
  flex: content-box;
  padding: 5vh 4vw;
  >img {
    height: 280px;
    width: 280px;
    min-width: 280px;
    border-radius: 50%;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    padding: 3vh 0 2vh 0;
  }
  a {
    color: #0064EB;
    font-size: 18px;
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
      font-size: 16px;
    }
    div {
      display: flex;
      align-items: center;
    }
  }
`
