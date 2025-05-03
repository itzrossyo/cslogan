import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const products = defineType({
    name: 'products', // Changed from 'productType' to 'products'
    title: 'Products',
    type: 'document',
    icon: TrolleyIcon,
    initialValue: {
        stock: 0,
    },
    fields: [
        defineField({
            name: 'title',
            title: 'Product Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'stock',
            title: 'Stock',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
    ],
});