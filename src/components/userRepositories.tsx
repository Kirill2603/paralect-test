import { FC } from "react";

import { useGetUserRepositoriesByNameQuery } from "../api/githubApi";
import { UserStateType } from "../store/types";

import { Pagination } from "./pagination";

type UserRepositoriesPropsType = {
  user: UserStateType
};

export const UserRepositories: FC<UserRepositoriesPropsType> = ({ user: { username, public_repos, selectedPage } }) => {

  const { data, error } = useGetUserRepositoriesByNameQuery(
    { username, page: selectedPage },
    { skip: username === "" }
  );

  if (data && public_repos !== 0) {
    return (
      <>
        <h2>Repositories ({public_repos})</h2>
        <ul>
          {data.map(({ name, node_id, description, html_url }) => (
            <li key={node_id}>
              <a href={html_url}>{name}</a>
              <p>{description}</p>
            </li>
          ))}
        </ul>

        {public_repos !== 0 && (
          <Pagination public_repos={public_repos} selectedPage={selectedPage} />
        )}
      </>
    );
  }
  if (error) {
    return <div>Not Found Repos</div>;
  }
  return <div>asd</div>;
};
