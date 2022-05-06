import { FC } from "react";

import userImg from "../../assets/user.svg";

export const NotFoundUser: FC = () => (
    <>
      <img src={userImg} alt="User not found" />
      <p>User not found</p>
    </>
  );
