import { type SchemaTypeDefinition } from "sanity";
import { english } from "./schemas/english";
import { chinese } from "./schemas/chinese";
import courseStructure from "./schemas/courseStructure";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [english, chinese, courseStructure],
};
