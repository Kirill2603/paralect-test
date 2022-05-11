import { FC } from 'react';

import { MainContainer } from './styles/mainContainer.style';

import { Header, UserProfile } from 'components';

export const App: FC = () => (
    <>
      <Header />
      <MainContainer>
        <UserProfile />
      </MainContainer>
    </>
  );
