import { type SchemaTypeDefinition } from "sanity";
import { english } from "./schemas/english";
import { chinese } from "./schemas/chinese";
import courseStructure from "./schemas/courseStructure";
import { exercise } from "./schemas/interactiveExercise";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [english, chinese, courseStructure, exercise],
};
