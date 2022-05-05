import React, { FC, useState } from 'react'
import { Header } from './components/header'
import { UserLogo } from './components/UserLogo'
import { UserRepositories } from './components/userRepositories'

export type UserDataType = {
  username: string,
  reposCount: number,
  selectedPage: number
}

export const App: FC = () => {

  const [userData, setUserData] = useState<UserDataType>({ username: '', reposCount: 0, selectedPage: 1 })

  return (
    <>
      <Header setUserData={setUserData} />
      <UserLogo setUserData={setUserData} userData={userData} />
      {userData.username !== '' &&
        <UserRepositories
          userData={userData}
          setUserData={setUserData}
        />}
    </>
  )
}
