import { Product } from '../../contexts/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square w-full overflow-hidden bg-pink-50">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-pink-600 mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{product.description}</p>
        <p className="text-pink-500 font-semibold mb-6">
          Rp{product.price.toLocaleString('id-ID')}
        </p>
        
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-3xl transition-colors"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}