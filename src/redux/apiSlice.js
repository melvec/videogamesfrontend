import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3001/videogames";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    getGameById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
    getGameByName: builder.query({
      query: (name) => ({
        url: `?name=${name}`,
        method: "GET",
      }),
    }),
    createGame: builder.mutation({
      query: (newGame) => ({
        url: "/",
        method: "POST",
        body: newGame,
      }),
    }),
  }),
});

export const { useGetAllQuery, useGetGameByIdQuery, useCreateGameMutation } =
  apiSlice;
