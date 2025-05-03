import { defineArrayMember, defineField, defineType } from "sanity";
import { BasketIcon } from "@sanity/icons";

export const orderType = defineType({
    name: "order",
    title: "Orders",
    type: "document",
    icon: BasketIcon,
    fields: [
        defineField({
            name: "orderNumber",
            title: "Order Number",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "stripeCheckoutSessionId",
            title: "Stripe Checkout Session ID",
            type: "string",
        }),
        defineField({
            name: "stripeCustomerId",
            title: "Stripe Customer ID",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "email",
            title: "Customer Email",
            type: "string",
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: "stripePaymentIntentId",
            title: "Stripe Payment Intent ID",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "products",
            title: "Products",
            type: "array",
            of: [
                defineArrayMember({
                    type: "object",
                    fields: [
                        defineField({
                            name: "product",
                            title: "Product Bought",
                            type: "reference",
                            to: [{ type: "products" }],
                        }),
                        defineField({
                            name: "quantity",
                            title: "Quantity Purchased",
                            type: "number",
                        }),
                    ],
                    preview: {
                        select: {
                            product: "product.title",
                            quantity: "quantity",
                            image: "product.image",
                            price: "product.price",
                        },
                        prepare({ product, quantity, price, image }) {
                            return {
                                title: `${product} x ${quantity}`,
                                subtitle: price ? `$${price.toFixed(2)}` : '',
                                media: image,
                            };
                        },
                    },
                }),
            ],
        }),
        defineField({
            name: "totalPrice",
            title: "Total Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "currency",
            title: "Currency",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "amountDiscount",
            title: "Amount Discount",
            type: "number",
            validation: (Rule) => Rule.min(0),
            initialValue: 0,
        }),
        defineField({
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Paid", value: "paid" },
                    { title: "Shipped", value: "shipped" },
                    { title: "Delivered", value: "delivered" },
                    { title: "Cancelled", value: "cancelled" },
                    { title: "Refunded", value: "refunded" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "orderDate",
            title: "Order Date",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "orderNumber",
            amount: "totalPrice",
            currency: "currency",
            orderId: "orderNumber",
            email: "email",
        },
        prepare({ title, amount, currency, orderId, email }) {
            const orderIdSnippet = orderId && orderId.length >= 10
                ? `${orderId.slice(0, 5)}...${orderId.slice(-5)}`
                : orderId || 'No ID';
            return {
                title: `${title} (${orderIdSnippet})`,
                subtitle: `${amount?.toFixed(2)} ${currency}, ${email}`,
                media: BasketIcon,
            };
        },
    },
});
