import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm">
      <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden bg-pink-50">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="text-pink-600 mb-1 truncate">{item.name}</h3>
        <p className="text-pink-500 mb-2">
          Rp{item.price.toLocaleString('id-ID')}
        </p>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4 text-pink-600" />
          </button>
          
          <span className="text-gray-700 min-w-[2rem] text-center">
            {item.quantity}
          </span>
          
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4 text-pink-600" />
          </button>
        </div>
      </div>
      
      <button
        onClick={() => onRemove(item.id)}
        className="flex-shrink-0 text-gray-400 hover:text-pink-500 transition-colors p-2"
        aria-label="Remove item"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
