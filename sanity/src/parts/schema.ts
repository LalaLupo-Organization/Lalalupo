import { type SchemaTypeDefinition } from "sanity";
import courseStructure from "../schemas/documents/courseStructure";
import siteLanguages from "../schemas/documents/siteLanguages";
import homepage from "../schemas/pages/homePage";
import aboutpage from "../schemas/pages/about";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [courseStructure, siteLanguages, homepage, aboutpage],
};
