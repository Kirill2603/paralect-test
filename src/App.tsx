import { FC } from 'react';

import { MainContainer } from './externalStyles/mainContainer.style';

import { Header, Profile } from 'components';

export const App: FC = () => (
    <>
      <Header />
      <MainContainer>
        <Profile />
      </MainContainer>
    </>
  );
