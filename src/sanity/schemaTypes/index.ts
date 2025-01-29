import { type SchemaTypeDefinition } from "sanity";
import { Product } from "../schemas/productSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product],
};
