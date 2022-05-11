import React, { FC, KeyboardEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/store';
import { setUser } from '../../store/userSlice';

import { HeaderStyle } from './header.styles';

import githubIco from 'assets/icons/githubIco.svg';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector(state => state.user.username);
  const onSearchEnterKeyPress = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLTextAreaElement;
      if (target.value !== username) {
        dispatch(setUser({ username: target.value, selectedPage: 1, public_repos: 0 }));
      }
    }
  };

  return (
    <HeaderStyle>
      <img src={githubIco} alt='githubLogo' />
      <input type='search' onKeyPress={onSearchEnterKeyPress} />
    </HeaderStyle>
  );
};
