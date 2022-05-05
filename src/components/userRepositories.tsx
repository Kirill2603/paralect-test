import { FC } from "react";

import { useGetUserRepositoriesByNameQuery } from '../api/githubApi';
import { UserDataType } from '../App';

import { Pagination } from './pagination';

type UserRepositoriesPropsType = {
  userData: UserDataType;
  setUserData: (userData: UserDataType) => void;
};

export const UserRepositories: FC<UserRepositoriesPropsType> = ({
  userData,
  setUserData,
}) => {
  const { data, isError } = useGetUserRepositoriesByNameQuery(
    { username: userData.username, page: userData.selectedPage },
    { skip: userData.username === '' },
  );

  let userRepositoriesContent;

  if (data) {
    userRepositoriesContent = (
      <>
        <h2>Repositories ({userData.reposCount})</h2>
        <ul>
          {data.map(({ name, node_id, description, html_url }) => (
            <li key={node_id}>
              <a href={html_url}>{name}</a>
              <p>{description}</p>
            </li>
          ))}
        </ul>

        {userData.reposCount !== 0 && (
          <Pagination userData={userData} setUserData={setUserData} />
        )}
      </>
    );
  } else if (isError) {
    userRepositoriesContent = <div>Not Found Repos</div>;
  }
  return <div>{userRepositoriesContent}</div>;
};
