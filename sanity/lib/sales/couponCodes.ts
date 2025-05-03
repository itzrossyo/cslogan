export const COUPON_CODES = {
    BFRIDAY: "BFRIDAY",
    XMASSALE: "XMASSALE",
    NEWYEAR: "NEWYEAR",
} as const;

export type couponCode = keyof typeof COUPON_CODES;

