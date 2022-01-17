import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "f8dc7de8b4msh9b36002839284cdp183867jsnbc020d62ec4f",
};

let baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => {
        return createRequest(`/coins?limit=${count}`);
      },
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
