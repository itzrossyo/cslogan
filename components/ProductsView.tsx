import { Category, Products } from "@/sanity.types";
import ProductGrid from "./ProductGrid";

interface ProductsViewProps {
    products: Products[];
    categories: Category[];
}

const ProductsView = ({ products, categories }: ProductsViewProps) => {
    console.log("👀 Products in ProductsView:", products);

    return (
        <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1">
                <ProductGrid products={products} />
            </div>
        </div>
    );
};

export default ProductsView;
