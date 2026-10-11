import React, { useMemo, useCallback, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

const ProductList = ({ searchQuery }) => {
  const { addToCart } = useCart();
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setAllProducts(products);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleAdd = useCallback(
    (product) => addToCart(product),
    [addToCart]
  );

  const filtered = useMemo(() => {
    if (!allProducts.length) return [];
    const q = searchQuery.trim().toLowerCase();
    if (!q) return allProducts;
    return allProducts.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }, [allProducts, searchQuery]);

  if (loading) return <p className="text-center">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={handleAdd} />
      ))}
    </div>
  );
};

export default ProductList;