import { BaseQueryApi, createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"
import { SanityDocument } from "@/types/sanity-io.types"
import client from "@/sanity/src/parts/config"
import { collection, getDoc, doc, DocumentData } from "firebase/firestore"
import { db } from "@/firebase/firebase"
import { CustomErrorType } from "@/types/sanity-io.types"
import { User } from "@/types/user-progress.types"
import { HomePageData } from "@/types/homepage-data.types"
import { AboutPageData } from "@/types/aboutpage-data.types"
import { LanguageSelect } from "@/types/languageSelect.types"
export const api = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getCourseStructure: builder.query<any, { languageCode: string }>({
      queryFn: async ({ languageCode }) => {
        try {
          const data = await client.fetch<any[]>(
            `*[_type == 'courseStructure' && languageCode == "${languageCode}"] | order(unitTitle asc, lessonNumber asc)

            `
          )

          return { data }
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", data: error } }
        }
      },
    }),
    getLesson: builder.query<any, { index: string }>({
      queryFn: async ({ index }) => {
        try {
          const data = await client.fetch<any[]>(
            `*[_type == "courseStructure" && languageCode == "en-it" && lessonNumber == 1] 
          `
          )
          return { data }
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", data: error } }
        }
      },
    }),
    getHomePage: builder.query<HomePageData, object>({
      queryFn: async ({ languageCode }: { languageCode: string }) => {
        try {
          const data = await client.fetch<HomePageData>(
            `*[_type == 'homepage' && languageCode == "${languageCode}"] {
              _id,
              title,
              subtitle,
              languageCode,
              
            }[0]`
          )
          return { data }
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", data: error } }
        }
      },
    }),
    getAboutPage: builder.query<AboutPageData, object>({
      queryFn: async ({ languageCode }: { languageCode: string }) => {
        try {
          const data = await client.fetch<AboutPageData>(
            `*[_type == 'aboutpage' && languageCode == "${languageCode}"] {
              _id,
              title,
              subtitle,
              languageCode,
              
            }[0]`
          )
          return { data }
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", data: error } }
        }
      },
    }),
    getSiteLanguages: builder.query<any, void>({
      queryFn: async () => {
        try {
          const data = await client.fetch<any>(
            `*[_type == "siteLanguages"]{
              languages[] {
                active,
                language,
                languageCode,
                icon {
                  _type,
                  asset-> {
                    _id,
                    _type,
                    url
                  }
                }
              }
            }[0].languages`
          )
          return { data }
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", data: error } }
        }
      },
    }),
    getLanguageData: builder.query<any, void>({
      queryFn: async () => {
        try {
          const data = await client.fetch<any[]>(
            `*[_type == 'courseStructure' && lessonNumber == 1] {
              totalUserCount,
                language,
             icon {
              asset-> {
                url
                  }
              }
            }`
          )
          return { data }
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", data: error } }
        }
      },
    }),

    getUser: builder.query<User, any>({
      queryFn: async (): Promise<any> => {
        try {
          const docRef = doc(db, "user", "FZq8d7VRkH5vAdu5bbnA")
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            return { data: docSnap.data() }
          } else {
            // docSnap.data() will be undefined in this case
          }
        } catch (error) {
          return { error }
        }
      },
    }),
  }),
})

export const {
  useGetCourseStructureQuery,
  useGetUserQuery,
  useGetLessonQuery,
  useGetSiteLanguagesQuery,
  useGetHomePageQuery,
  useGetAboutPageQuery,
  useGetLanguageDataQuery,
} = api
