import { type SchemaTypeDefinition } from "sanity";
import { english } from "../schemas/documents/english";
import { chinese } from "../schemas/documents/chinese";
import courseStructure from "../schemas/documents/courseStructure";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [english, chinese, courseStructure],
};
