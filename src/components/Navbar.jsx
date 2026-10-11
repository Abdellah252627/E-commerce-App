import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { count } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <h1 className="text-xl font-bold">🛒 Shop</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Toggle theme"
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        <span className="relative cursor-pointer">
          🛒
          {count > 0 && (
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
              {count}
            </span>
          )}
        </span>

        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm">👋 {user.name}</span>
            <button
              onClick={logout}
              className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded"
            >
              خروج
            </button>
          </div>
        ) : (
          <span className="text-sm text-gray-500">ضيوف</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;