import { languageCodeMap } from "../../helpers/languageMap";

const homepage = {
  title: "Homepage",
  name: "homepage",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
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
      title: "subtitle",
      name: "subtitle",
      type: "string",
    },
  ],
};
export default homepage;
