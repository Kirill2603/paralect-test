import { FC, useEffect } from "react";

import { useGetUserByNameQuery } from "../api/githubApi";
import { useAppDispatch } from "../store/store";
import { UserStateType } from "../store/types";
import { setUser } from "../store/userSlice";

import { Loader } from "./loader";

import followersImg from "assets/follower.svg";
import followerImg from "assets/followers.svg";

type UserLogoPropsType = {
  user: UserStateType
}

export const UserLogo: FC<UserLogoPropsType> = ({ user: { username } }) => {
  const dispatch = useAppDispatch();
  const { data, status, error} = useGetUserByNameQuery(username, {
    skip: username === ""
  });

  useEffect(() => {
    if (data && username && !error) {
      dispatch(setUser({ username, selectedPage: 1, public_repos: data.public_repos }));
    }
  }, [username, data]);

  if (status === "rejected") {
    return <div>Error!</div>;
  }
  if (status === "pending") {
    return <Loader />;
  }
  if (data && status === "fulfilled") {
    return (
      <>
        <img src={data.avatar_url} alt="User logo" />
        <h2>{data.name}</h2>
        <a href={data.html_url}>{data.login}</a>
        <div className="follower">
          <img src={followersImg} alt="followers" />
          <p>
            {data.followers >= 1000
              ? `${(data.followers / 1000).toFixed(1)}k`
              : data.followers}{" "}
            followers
          </p>
          <img src={followerImg} alt="following" />
          <p>{data.following} following</p>
        </div>
      </>
    );
  }
  return (
    <div>Pls enter username</div>
  );
};

