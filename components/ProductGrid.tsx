"use client";
import { Products } from "@/sanity.types";
import { AnimatePresence, motion } from "framer-motion";
import ProductThumb from "./ProductThumb";

function ProductGrid({ products }: { products: Products[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            <AnimatePresence>
                {products.map((products) => (
                    <motion.div
                        key={products._id}
                        layout
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-center"
                    >
                        <ProductThumb key={products._id} products={products} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default ProductGrid;
