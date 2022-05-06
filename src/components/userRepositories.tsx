import { FC } from "react";

import { useGetUserRepositoriesByNameQuery } from "../api/githubApi";

import { Pagination } from "./pagination";

import noReposImg from 'assets/rep.svg'

type UserRepositoriesPropsType = {
  username: string
  public_repos: number
  selectedPage: number
};

export const UserRepositories: FC<UserRepositoriesPropsType> = ({ username, public_repos, selectedPage }) => {

  const { data } = useGetUserRepositoriesByNameQuery(
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
  if (public_repos === 0 && username !== '') {
    return <p><img src={noReposImg} alt="Empty repository" />Repository list is empty</p>;
  }
  if (username === '' || data && data.length === 0) {
    return <div />
  }
  return <div />;
};
