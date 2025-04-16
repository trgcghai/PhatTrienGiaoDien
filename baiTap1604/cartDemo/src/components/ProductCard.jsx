const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow flex items-center justify-between">
      <div>
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
      </div>
      <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
