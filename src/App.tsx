import { FC } from 'react';

import { Header, Profile } from 'components';
import { MainContainer } from 'externalStyles';

export const App: FC = () => (
    <>
      <Header />
      <MainContainer>
        <Profile />
      </MainContainer>
    </>
  );
