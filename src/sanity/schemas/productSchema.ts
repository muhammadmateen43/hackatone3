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
      title: "Description",
      type: "string",
    },
    {
      name: "patrol_quantity",
      title: "Patrol Quantity",
      type: "number",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "car_type",
      title: "Car Type",
      type: "string",
    },
    {
      name: "seats_capacity",
      title: "Seats Capacity",
      type: "number",
    },
    {
      name: "model",
      title: "Model",
      type: "string",
    },
  ],
});
