import { FC } from 'react';

import { UserType } from '../../../api/apiTypes';
import followerIco from '../../../assets/icons/followerIco.svg';
import followersIco from '../../../assets/icons/followersIco.svg';

import { ProfileInfoStyles } from './profileInfo.styles';

type ProfileInfoPropsType = {
  user: UserType
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ user: { followers, following, html_url, avatar_url, name, login } }) => {
  let formattedFollows = '0';
    if (followers >= 1000) {
      formattedFollows = `${(followers / 1000).toFixed(1).toString()} k`
    }

   return (
     <ProfileInfoStyles>
       <img src={avatar_url} alt="User logo" />
       <h2>{name}</h2>
       <a href={html_url} target="_blank" rel="noopener noreferrer">{login}</a>
       <div className="follows">
         <div>
           <img src={followersIco} alt="followers" />
           <p>{formattedFollows} followers</p>
         </div>
         <div>
           <img src={followerIco} alt="following" />
           <p> {following} following</p>
         </div>
       </div>
     </ProfileInfoStyles>
   )
}

