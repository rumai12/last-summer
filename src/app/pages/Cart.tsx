import { useState } from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { CartItem } from '../components/CartItem';
import { CheckoutModal } from '../components/CheckoutModal';

interface CartProps {
  onNavigateToHome: () => void;
}

export function Cart({ onNavigateToHome }: CartProps) {
  const { cart, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useCart();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pb-32">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateToHome}
              className="p-2 hover:bg-pink-50 rounded-full transition-colors"
              aria-label="Back to home"
            >
              <ArrowLeft className="w-6 h-6 text-pink-500" />
            </button>
            <h1 className="text-pink-600">Keranjang</h1>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 sm:py-24">
            <div className="bg-pink-100 rounded-full p-8 mb-6">
              <ShoppingBag className="w-16 h-16 text-pink-400" />
            </div>
            <h2 className="text-gray-600 mb-4">Keranjang Kosong</h2>
            <p className="text-gray-500 mb-6 text-center max-w-md">
              Anda belum menambahkan produk ke keranjang
            </p>
            <button
              onClick={onNavigateToHome}
              className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-2xl transition-colors"
            >
              Mulai Belanja
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        )}
      </div>

      {/* Sticky Bottom Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-pink-100 shadow-lg z-40">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <p className="text-gray-600 text-sm mb-1">
                  Total Item: {totalItems}
                </p>
                <p className="text-pink-600">
                  Total: Rp{totalPrice.toLocaleString('id-ID')}
                </p>
              </div>
              <button
                onClick={() => setIsCheckoutModalOpen(true)}
                className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white py-4 px-8 rounded-2xl transition-colors shadow-md hover:shadow-lg"
              >
                Checkout via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        cartItems={cart}
        totalPrice={totalPrice}
      />
    </div>
  );
}
