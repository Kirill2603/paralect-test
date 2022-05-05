import { FC } from 'react'
import { useGetUserRepositoriesByNameQuery } from '../api/githubApi'
import { Pagination } from './pagination'
import { UserDataType } from '../App'

type UserRepositoriesPropsType = {
  userData: UserDataType
  setUserData: (userData: UserDataType) => void
}

export const UserRepositories: FC<UserRepositoriesPropsType> = ({ userData, setUserData }) => {

  const { data, isError } = useGetUserRepositoriesByNameQuery(
    { username: userData.username, page: userData.selectedPage }, { skip: userData.username === '' },
  )

  let userRepositoriesContent
  if (data) {
    userRepositoriesContent =
      <>
        <h2>Repositories ({userData.reposCount})</h2>
        <ul>
          {data.map(repo => <li key={repo.node_id}>
            <a href={repo.html_url}>{repo.name}</a>
            <p>{repo.description}</p>
          </li>)}
        </ul>

        {userData.reposCount !== 0 &&
          <Pagination
            userData={userData}
            setUserData={setUserData}
          />}
      </>
  } else if (isError) {
    userRepositoriesContent =  <div>Not Found Repos</div>
  }
  return (
    <>{userRepositoriesContent}</>
  )
}
