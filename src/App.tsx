import { FC } from "react";

import { useAppSelector } from "./store/store";

import { Header, UserLogo, UserRepositories } from "components";

export const App: FC = () => {
  const user = useAppSelector(state => state.user)
    return (
      <>
        <Header />
        <UserLogo user={user}/>
        <UserRepositories user={user}/>
      </>
    );
  }
