import { FC, useEffect } from 'react';

import { useGetUserByNameQuery } from '../../api/githubApi';
import userIco from '../../assets/icons/userIco.svg';
import { useAppDispatch } from '../../store/store';
import { UserStateType } from '../../store/types';
import { setUser } from '../../store/userSlice';
import { EmptyContent } from '../emptyContent';
import { EmptyContentStyle } from '../emptyContent.styles';
import { Loader } from '../loader/loader';

import { ProfileInfo } from './profileInfo/profileInfo';

import searchIco from 'assets/icons/searchIco.svg';

type UserLogoPropsType = {
  user: UserStateType
}

export const UserProfile: FC<UserLogoPropsType> = ({ user: { username } }) => {
  const dispatch = useAppDispatch();
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
      <EmptyContentStyle>
        <Loader />
      </EmptyContentStyle>
    );
  }

  if (data && status === 'fulfilled') {
    return (
      <ProfileInfo user={data} />
    );
  }

  return (
    <EmptyContent img={searchIco} description='Start with searching a GitHub user' />
  );
};
