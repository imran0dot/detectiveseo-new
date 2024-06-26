import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://admin.detectiveseo.com/wp-json/wp/v2/'
  }),
  endpoints: (builder) => ({
    getAllBlog: builder.query({
      query: ({skip, perPage}) => `posts?offset=${skip}&per_page=${perPage}&_fields=id,title,featured_media,date,categories,content`,
    }),
    getBlogCount: builder.query({
      query: () => `posts?per_page=1`,
      transformResponse: (response, meta) => {
        return meta.response.headers.get('X-WP-Total');
      },
    }),
    findIdByTitle: builder.query({
      query: (title) => `/posts?_fields=id}&search=${encodeURIComponent(title)}`,
    }),
    getBlog: builder.query({
      query: (post_id) => `/posts/${post_id}`,
    }),
    getMedia: builder.query({
      query: (media_id) => `/media/${media_id}?_fields=guid`,
      transformResponse: (response) => response.guid.rendered
    }),
    getMahin: builder.query({
      query: () => `posts?_fields=id,title,featured_media,date,categories,content`,

    })
  }),
});

export const { 
  useGetAllBlogQuery, 
  useGetBlogQuery, 
  useGetMediaQuery, 
  useFindIdByTitleQuery,
  useGetBlogCountQuery

} = blogApi;
