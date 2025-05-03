import { Category, Products } from "@/sanity.types";
// import CategorySelectorComponent from './CategorySelectorComponent'; // adjust path
import ProductGrid from './ProductGrid'; // adjust path

interface ProductsViewProps {
    products: Products[];
    categories: Category[];
}

const ProductsView = ({ products, }: ProductsViewProps) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-[200px]">
                {/* <CategorySelectorComponent categories={categories} /> */}
            </div>

            <div className="flex-1">
                <ProductGrid products={products} />
            </div>

            <hr className="w-1/2 sm:w-3/4 mt-4" />
        </div>
    );
};

export default ProductsView;
