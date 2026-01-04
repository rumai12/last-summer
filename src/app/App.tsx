import { useState } from 'react';
import { CartProvider } from '../contexts/CartContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

type Page = 'home' | 'cart';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar onCartClick={() => setCurrentPage('cart')} />
        
        {currentPage === 'home' && (
          <Home onNavigateToCart={() => setCurrentPage('cart')} />
        )}
        
        {currentPage === 'cart' && (
          <Cart onNavigateToHome={() => setCurrentPage('home')} />
        )}
      </div>
    </CartProvider>
  );
}
