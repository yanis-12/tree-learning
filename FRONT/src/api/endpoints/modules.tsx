// src/api/endpoints/modules.ts
import { apiSlice } from '../apiSlice';
import { Module } from '../../types/modules';

export const modulesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModules: builder.query<Module[], void>({
      query: () => '/api/modules',
    }),
    // Ajouter un module
    addModule: builder.mutation<Module, { title: string }>({
      query: (newModule) => ({
        url: '/api/modules',
        method: 'POST',
        body: newModule,
      }),
      // Invalidation du cache pour que la liste des modules soit mise à jour
      invalidatesTags: ['Modules'],
    }),
    // Supprimer un module
    deleteModule: builder.mutation<void, number>({
      query: (moduleId) => ({
        url: `/api/modules/${moduleId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Modules'], // Invalidation du cache après la suppression
    }),
  }),
});

export const {
  useGetModulesQuery,
  useAddModuleMutation,
  useDeleteModuleMutation,
} = modulesApi;
