import { FC, useEffect } from 'react';

import styled from 'styled-components';

import { useGetUserByNameQuery } from '../api/githubApi';
import { UserDataType } from '../App';

import followersImg from 'assets/follower.svg';
import followerImg from 'assets/followers.svg';

const UserLogoStyle = styled.div`
  display: flex;
  flex-direction: column;
  > img {
    height: 280px;
    width: 280px;
    border-radius: 100%;
  }
`;

type UserLogoPropsType = {
  userData: UserDataType;
  setUserData: (userData: UserDataType) => void;
};

export const UserLogo: FC<UserLogoPropsType> = ({ userData, setUserData }) => {
  const { data, isError, isLoading } = useGetUserByNameQuery(userData.username, {
    skip: userData.username === '',
  });

  useEffect(() => {
    if (data) {
      setUserData({ ...userData, reposCount: data.public_repos });
    }
  }, [data]);

  if (isError) {
    return <div>User not found!</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (data) {
    return (
      <UserLogoStyle>
        <img src={data.avatar_url} alt="User logo" />
        <h2>{data.name}</h2>
        <a href={data.html_url}>{data.login}</a>
        <div className="follower">
          <img src={followersImg} alt="followers" />
          <p>
            {data.followers >= 1000
              ? `${(data.followers / 1000).toFixed(1)}k`
              : data.followers}{' '}
            followers
          </p>
          <img src={followerImg} alt="following" />
          <p>{data.following} following</p>
        </div>
      </UserLogoStyle>
    );
  }
  return <div>Pls enter username</div>;
};
