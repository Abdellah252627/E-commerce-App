import React, { memo } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const ProductCard = ({ product, onAdd }) => {
  const { id, title, price, image, category } = product;
  const { user } = useAuth();

  const handleAdd = () => {
    if (!user) {
      alert('Please login first to add items to cart');
      return;
    }
    onAdd(product);
  };

  return (
    <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48"
      />
      <div className="flex flex-col flex-1 p-4">
        <span className="text-xs text-blue-500 mb-1">{category}</span>
        <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-green-600">${price}</span>
          <button
            onClick={handleAdd}
            disabled={!user}
            className={`px-4 py-2 text-sm font-medium text-white rounded transition ${
              user
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);