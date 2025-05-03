import { defineField, defineType } from 'sanity';
import { TrolleyIcon } from '@sanity/icons';

export const salesType = defineType({
    name: 'sale',
    title: 'Sale',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Sale Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Sale Description',
            type: 'text',
        }),
        defineField({
            name: "discountAmount",
            type: "number",
            title: "Discount Amount",
            description: "Amount off in percentage or fixed value",
        }),
        defineField({
            name: "couponCode",
            type: "string",
            title: "Coupon Code",
        }),
        defineField({
            name: "validFrom",
            type: "datetime",
            title: "Valid From",
        }),
        defineField({
            name: "validUntil",
            type: "datetime",
            title: "Valid Until",
        }),
        defineField({
            name: "isActive",
            type: "boolean",
            title: "Is Active",
            description: "Toggle to activate or deactivate the sale",
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: "title",
            discountAmount: "discountAmount",
            couponCode: "couponCode",
            isActive: "isActive",
        },
        prepare({ title, discountAmount, couponCode, isActive }) {
            const status = isActive ? "Active" : "Inactive";
            return {
                title: title || 'No Title',
                subtitle: `${discountAmount || 0}% off - Code: ${couponCode || 'N/A'} - ${status}`,
                media: TrolleyIcon,
            };
        }
    }
});
