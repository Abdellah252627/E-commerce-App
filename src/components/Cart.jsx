import React, { useMemo } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Cart = ({ open, onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart, total, count } = useCart();
  const { user } = useAuth();

  const items = useMemo(() => cart, [cart]);

  if (!open) return null;

  if (!user) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl max-w-sm mx-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Login Required</h3>
          <p className="text-gray-500 mb-4">Please login to view and manage your cart.</p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            OK
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <aside className="absolute top-0 right-0 flex flex-col w-full max-w-md h-full bg-white dark:bg-gray-900 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">🛒 Cart ({count})</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-green-600">${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 flex items-center justify-center border rounded"
                  >-</button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center border rounded"
                  >+</button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 text-red-500 text-sm"
                  >🗑</button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold text-green-600">${total.toFixed(2)}</span>
            </div>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full mt-2 py-2 text-sm text-gray-500 hover:text-red-500"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default Cart;