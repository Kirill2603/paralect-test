import { FC } from "react";

import styled from 'styled-components';

import { useAppSelector } from "./store/store";

import { Header, UserProfile, UserRepositories } from "components";

const AppContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1 1 auto;
`

export const App: FC = () => {
  const user = useAppSelector(state => state.user);
  return (
    <>
      <Header />
      <AppContainer>
      <UserProfile user={user} />
      {user.username !== '' && <UserRepositories user={user} />}
      </AppContainer>
    </>
  );
};
