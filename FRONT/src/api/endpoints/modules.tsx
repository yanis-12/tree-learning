import { apiSlice } from '../apiSlice';
import { Module } from '../../types/modules';

export const modulesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Récupérer les modules
    getModules: builder.query<Module[], void>({
      query: () => '/api/modules',
    }),
  }),
});


export const { useGetModulesQuery } = modulesApi;
