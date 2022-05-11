import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1 1 auto;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
