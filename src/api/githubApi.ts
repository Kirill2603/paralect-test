import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { UserRepositoriesType, UserType } from './apiTypes';

const baseUrl = 'https://api.github.com';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getUserByName: builder.query<UserType, string>({
      query: (username: string) => `users/${username}`,
    }),
    getUserRepositoriesByName: builder.query<
      UserRepositoriesType,
      { username: string; page?: number }
    >({
      query: (arg: { username: string; page: number }) =>
        `users/${arg.username}/repos?per_page=4&page=${arg.page || 1}`,
    }),
  }),
});

export const { useGetUserByNameQuery, useGetUserRepositoriesByNameQuery } = githubApi;
