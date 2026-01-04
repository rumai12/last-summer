import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

interface NavbarProps {
  onCartClick: () => void;
}

export function Navbar({ onCartClick }: NavbarProps) {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* LEFT: logo / text */}
          <div className="flex items-center gap-2">
            {/* MOBILE */}
            <img
              src="/logo-last-summer.png"
              alt="Last Summer"
              className="h-17 block md:hidden"
            />

            {/* DESKTOP */}
            <h1 className="text-pink-500 text-xl font-semibold hidden md:block">
              Last Summer
            </h1>
          </div>

          {/* RIGHT: cart */}
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-pink-50 rounded-full transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="w-6 h-6 text-pink-500" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </nav>
  );
}
