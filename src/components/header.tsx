import React, { FC, KeyboardEvent } from 'react';

import styled from 'styled-components';

import { useAppDispatch } from "../store/store";
import { setUser } from "../store/userSlice";

import githubLogo from 'assets/githubLogo.svg';

const HeaderStyle = styled.header`
  background-color: #0064eb;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3vw;

  img {
    width: 40px;
    height: 40px;
  }

  input {
    padding: 0;
    margin: 0 2vw;
    height: 40px;
    border: 0;
    outline: none;
    border-radius: 6px;
  }
`;

export const Header: FC = () => {
  const dispatch = useAppDispatch()

  const onSearchEnterKeyPress = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLTextAreaElement;
      dispatch(setUser({username: target.value, selectedPage: 1, public_repos: 0}))
    }
  };

  return (
    <HeaderStyle>
      <img src={githubLogo} alt="githubLogo" />
      <input type="search" onKeyPress={onSearchEnterKeyPress} />
    </HeaderStyle>
  );
};
