import { FC, memo } from 'react';

import { useGetUserRepositoriesByNameQuery } from 'api/githubApi';
import noReposImg from 'assets/icons/emptyRepositoryIco.svg';
import { Loader, RepositoriesList, EmptyContent } from 'components';

type RepositoriesPropsType = {
  username: string,
  selectedPage: number,
  public_repos: number,
};

export const Repositories: FC<RepositoriesPropsType> = memo((
  {
    username,
    public_repos,
    selectedPage,
  }) => {
  const { data, error, status } = useGetUserRepositoriesByNameQuery(
    { username, page: selectedPage },
    { skip: username === '' },
  );

  if (status === 'pending' && data && data.length !== 0) {
    return (
        <Loader />
    );
  }
  if (error) {
    return (
      <EmptyContent img={noReposImg} description='Error :(' />
    );
  }
  if (public_repos === 0 && status === 'fulfilled') {
    return (
      <EmptyContent
        img={noReposImg}
        description='Repository list is empty' />
    );
  }
  if (data && public_repos !== 0 && status === 'fulfilled') {
    return (
      <RepositoriesList repositories={data} selectedPage={selectedPage} public_repos={public_repos} />
    );
  }
  return null;
});
