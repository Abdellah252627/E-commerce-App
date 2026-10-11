# E-commerce App

A modern, full-featured e-commerce web application built with React 18, Vite, and Tailwind CSS. Features dark/light theme, shopping cart, user authentication, and product search.

## Tech Stack

- **React 18** - UI library with hooks and context API
- **Vite 5** - Fast build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing with Autoprefixer

## Features

- 🛍️ **Product Catalog** - Browse products with search functionality
- 🔍 **Real-time Search** - Debounced search with custom hook
- 🛒 **Shopping Cart** - Add/remove items, quantity management, persistent storage
- 🌙 **Dark/Light Theme** - System preference detection with manual toggle
- 🔐 **User Authentication** - Login form with protected routes
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **Performance** - Memoized components, custom hooks for optimization

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation with theme toggle
│   ├── SearchBar.jsx    # Search input with debouncing
│   ├── ProductList.jsx  # Product grid display
│   ├── ProductCard.jsx  # Individual product card
│   ├── Cart.jsx         # Slide-out cart panel
│   └── LoginForm.jsx    # Authentication form
├── contexts/
│   ├── ThemeContext.jsx # Theme state management
│   ├── CartContext.jsx  # Cart state management
│   └── AuthContext.jsx  # Auth state management
├── hooks/
│   ├── useLocalStorage.js  # Persistent localStorage hook
│   ├── useFetch.js         # Data fetching hook
│   └── useDebounce.js      # Debounce utility hook
├── data/
│   └── products.js      # Product data
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles with Tailwind
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Key Implementation Details

### State Management
Uses React Context API for global state:
- **ThemeContext** - Manages dark/light mode with localStorage persistence
- **CartContext** - Handles cart items, quantities, and totals
- **AuthContext** - Manages user authentication state

### Custom Hooks
- **useLocalStorage** - Syncs state with localStorage
- **useFetch** - Handles async data fetching with loading/error states
- **useDebounce** - Delays value updates for search optimization

### Performance Optimizations
- `React.memo` on CartButton component
- `useCallback` for event handlers
- Debounced search to reduce re-renders

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use for personal or commercial projects.