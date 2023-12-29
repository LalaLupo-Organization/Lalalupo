import { type SchemaTypeDefinition } from "sanity";
import courseStructure from "../schemas/documents/courseStructure";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [courseStructure],
};
