import { FC, memo } from 'react';

import { ProfileInfoStyles } from './profileInfo.styles';

import { UserType } from 'api/apiTypes';
import followerIco from 'assets/icons/followerIco.svg';
import followersIco from 'assets/icons/followersIco.svg';

type ProfileInfoPropsType = {
  user: UserType,
}

export const ProfileInfo: FC<ProfileInfoPropsType> = memo((
  {
    user: {
      followers,
      following,
      html_url,
      avatar_url,
      name,
      login,
    },
  }) => {
  let formattedFollows = '0';
  if (followers >= 1000) {
    formattedFollows = `${(followers / 1000).toFixed(1).toString()} k`;
  }

  return (
    <ProfileInfoStyles>
      <img src={avatar_url} alt='User logo' />
      <div>
        <h2>{name}</h2>
        <a href={html_url} target='_blank' rel='noopener noreferrer'>{login}</a>
        <span className='follows'>
          <span>
            <img src={followersIco} alt='followers' />
            <p>{formattedFollows} followers</p>
          </span>
          <span>
            <img src={followerIco} alt='following' />
            <p> {following} following</p>
          </span>
        </span>
      </div>
    </ProfileInfoStyles>
  );
});

