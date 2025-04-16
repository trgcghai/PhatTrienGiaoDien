import products from "../data/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
