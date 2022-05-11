import { FC } from 'react';

import { UserStateType } from '../../store/types';
import { EmptyContent } from '../emptyContent';
import { Loader } from '../loader/loader';

import { RepositoriesList } from './repositoriesList/repositoriesList';

import { useGetUserRepositoriesByNameQuery } from 'api/githubApi';
import noReposImg from 'assets/icons/emptyRepositoryIco.svg';

type UserRepositoriesPropsType = {
  user: UserStateType
};

export const UserRepositories: FC<UserRepositoriesPropsType> = ({ user: { username, public_repos, selectedPage } }) => {
  const { data, error, status} = useGetUserRepositoriesByNameQuery(
    { username, page: selectedPage },
    { skip: username === '' },
  );

  if (status === 'pending' && username !== '') {
    return <Loader />
  }
  if (error) {
    return null;
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
};
