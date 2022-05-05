import React, { FC, KeyboardEvent } from 'react'
import styled from 'styled-components'
import githubLogo from 'assets/githubLogo.svg'
import { UserDataType } from '../App'

const HeaderStyle = styled.header`
  background-color: #0064EB;
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
`

type HeaderPropsType = {
  setUserData: (userData: UserDataType) => void
}

export const Header: FC<HeaderPropsType> = ({setUserData}) => {

  const onSearchEnterKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLTextAreaElement
      setUserData({username: target.value, reposCount: 0, selectedPage: 1})
    }
  }

  return (
    <HeaderStyle>
      <img src={githubLogo} alt='githubLogo' />
      <input type='text' onKeyPress={onSearchEnterKeyPress} />
    </HeaderStyle>
  )
}
