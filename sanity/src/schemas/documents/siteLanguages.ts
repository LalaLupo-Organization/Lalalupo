// languageMap.ts
import { languageCodeMap } from "../../helpers/languageMap";

const siteLanguages = {
  name: "siteLanguages",
  title: "Site Languages",
  type: "document",
  fields: [
    {
      name: "languages",
      title: "Languages",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "language",
              title: "Language",
              type: "string",
              options: {
                list: Object.keys(languageCodeMap),
              },
            },
            {
              name: "languageCode",
              title: "Language Code",
              type: "string",
              options: {
                list: Object.values(languageCodeMap),
              },
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
            },
            {
              name: "active",
              title: "Active",
              type: "boolean",
            },
          ],
          preview: {
            select: {
              language: "language",
              languageCode: "languageCode",

              icon: "icon",
            },
            prepare(selection: any) {
              const { language, languageCode, icon, active } =
                selection;

              return {
                title: `${language} (${languageCode})`,
                subtitle: `Language`,
                media: icon,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "languages.0.language", // Assuming you have a "language" field in the first object of "languages" array
      icon: "languages.0.icon", // Assuming you have an "icon" field in the first object of "languages" array
    },
    prepare(selection: any) {
      const { title, icon } = selection;
      return {
        title: "Available Languages",
        media: icon,
      };
    },
  },
};

export default siteLanguages;
