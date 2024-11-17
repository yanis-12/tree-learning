import { apiSlice } from '../apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/login_check',  
        method: 'POST',
        body: credentials,
      }), 
      invalidatesTags: ['Auth'],
    }),
    
  }),
});

export const { useLoginMutation } = authApi;
