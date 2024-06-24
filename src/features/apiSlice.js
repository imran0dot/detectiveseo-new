import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://admin.detectiveseo.com/wp-json/wp/v2/'
  }),
  endpoints: (builder) => ({
    getAllBlog: builder.query({
      query: (remainUrl) => `posts/${remainUrl}`, 
    }),
  }),
});

export const { useGetAllBlogQuery } = blogApi;
