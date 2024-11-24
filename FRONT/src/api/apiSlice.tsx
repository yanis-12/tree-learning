import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';

const API_URL = 'http://localhost:8000/api';

export const apiSlice = createApi({
  reducerPath: 'app_module_api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      // Récupérer le token du store Redux
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth', 'Modules'], 
  endpoints: (builder) => ({
    getModules: builder.query({
      query: () => '/modules', // Route à appeler
      providesTags: ['Modules'], 
    }),
  }),
});

export const { useGetModulesQuery } = apiSlice;