import { FC } from 'react';

import { UserRepositoriesType } from '../api/apiTypes';
import { RepositoriesListStyles } from '../styles/RepositoriesList.styles';

import { Pagination } from './pagination';

type RepositoriesListPropsType = {

  repositories: UserRepositoriesType,
  public_repos: number,
  selectedPage: number,
}

export const RepositoriesList: FC<RepositoriesListPropsType> = (
  { repositories, public_repos, selectedPage },
) => (
  <RepositoriesListStyles>
    <h2>Repositories ({public_repos})</h2>
    <ul>
      {repositories.map(({ name, node_id, description, html_url }) => (
        <li key={node_id}>
          <a href={html_url} target='_blank' rel='noopener noreferrer'>{name}</a>
          <p>{description}</p>
        </li>
      ))}
    </ul>

    {public_repos !== 0 && (
      <Pagination public_repos={public_repos} selectedPage={selectedPage} />
    )}
  </RepositoriesListStyles>
);
