import {
  BaseQueryApi,
  createApi,
  fakeBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { SanityDocument } from "@/types/sanity-io.types";
import client from "@/sanity/src/parts/config";
import { collection, getDoc, doc, DocumentData } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { CustomErrorType } from "@/types/sanity-io.types";
import { User } from "@/types/user-progress.types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getCourseStructure: builder.query<any, string>({
      queryFn: async (id) => {
        try {
          const data = await client.fetch<any[]>(
            `*[_type == "courseStructure"] | order(_createdAt asc)`,
          );
          return { data };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", data: error } };
        }
      },
    }),
    getLesson: builder.query<any, { index: string }>({
      queryFn: async ({ index }) => {
        try {
          const data = await client.fetch<any[]>(
            `*[_type == "courseStructure"] | order(_createdAt asc) [${index}] {
              exercise 
            
              
            }
          `,
          );
          return { data };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", data: error } };
        }
      },
    }),

    getUser: builder.query<User, any>({
      queryFn: async (): Promise<any> => {
        try {
          const docRef = doc(db, "users", "u2QgD1RHzRQAm8iFUBaw");
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            return { data: docSnap.data() };
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const {
  useGetCourseStructureQuery,
  useGetUserQuery,
  useGetLessonQuery,
} = api;
