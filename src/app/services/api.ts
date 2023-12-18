import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import client from "../../../sanity/config";
import client from "@/sanity/config";

interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
}

export const languageCourseApi = createApi({
  reducerPath: "languageCourseApi",
  baseQuery: () => {
    // Use Sanity's client to fetch data

    return { data: client.fetch(`*[_type == "courseStructure"]`) };
  },
  endpoints: (builder) => ({
    getCourseStructure: builder.query<any, string>({
      query: (url) => ({
        url,
      }),
    }),
  }),
});

export const { useGetCourseStructureQuery } = languageCourseApi;
