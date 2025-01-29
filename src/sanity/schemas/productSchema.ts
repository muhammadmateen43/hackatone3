import { defineType, defineField } from "sanity";

export const Product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "description",
      title: "description",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
  ],
});
