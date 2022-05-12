import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserStateType } from "./types";

const initialState: UserStateType = {
  username: "",
  selectedPage: 1,
  public_repos: 0
}

export const userSlice = createSlice({

  name: "User",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserStateType>) => action.payload,
    setSelectedPage: (state, action: PayloadAction<number>) => ({ ...state, selectedPage: action.payload })
  }
});

export const { setUser, setSelectedPage } = userSlice.actions;
