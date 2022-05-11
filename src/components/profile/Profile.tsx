import { FC, useEffect } from 'react';

import { useGetUserByNameQuery } from 'api/githubApi';
import searchIco from 'assets/icons/searchIco.svg';
import userIco from 'assets/icons/userIco.svg';
import { ProfileInfo, Loader, Repositories, EmptyContent} from 'components';
import { useAppDispatch, useAppSelector } from 'store/store';
import { setUser } from 'store/userSlice';

export const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const { username, selectedPage,public_repos } = useAppSelector(state => state.user)
  const { data, status, error } = useGetUserByNameQuery(username, {
    skip: username === '',
  });

  useEffect(() => {
    if (data && username && !error) {
      dispatch(setUser({ username, selectedPage: 1, public_repos: data.public_repos }));
    }
    if (error) {
      dispatch(setUser({ username: '', selectedPage: 1, public_repos: 0 }));
    }
  }, [username, data]);

  if (status === 'rejected') {
    return (
      <EmptyContent img={userIco} description='User not found' />
    );
  }

  if (status === 'pending') {
    return (
        <Loader />
    );
  }
  if (data && status === 'fulfilled') {
    return (
      <>
        <ProfileInfo user={data} />
        <Repositories username={username} selectedPage={selectedPage} public_repos={public_repos}/>
      </>
    );
  }

  return (
    <EmptyContent img={searchIco} description='Start with searching a GitHub user' />
  );
};
