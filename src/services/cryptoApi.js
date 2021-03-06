import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "f8dc7de8b4msh9b36002839284cdp183867jsnbc020d62ec4f",
};

let baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
const createRequestWithParams = (url, timePeriod) => ({
  url,
  headers: cryptoApiHeaders,
  params: { timePeriod: timePeriod },
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => {
        return createRequest(`/coins?limit=${count}`);
      },
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => {
        return createRequest(`/coin/${coinId}`);
      },
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => {
        return createRequestWithParams(`/coin/${coinId}/history`, timePeriod);
      },
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
