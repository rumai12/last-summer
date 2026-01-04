import { Product, useCart } from '../../contexts/CartContext';
import { ProductCard } from '../components/ProductCard';

const products: Product[] = [
  // SMOOTHIE + FRESH MILK
  {
    id: '1',
    name: 'PINK CHARGE',
    description: 'Banana, Dragon Fruit, Low Fat Milk',
    price: 25000,
    image: '/pink-charge.png',
    category: 'SMOOTHIE + FRESH MILK',
  },
  {
    id: '2',
    name: 'BERRY ROSE',
    description: 'Banana, Strawberry, Low Fat Milk',
    price: 24000,
    image: '/berry-rose.png',
    category: 'SMOOTHIE + FRESH MILK',
  },
  {
    id: '3',
    name: 'BLUE BOOST',
    description: 'Banana, Blueberry, Low Fat Milk',
    price: 26000,
    image: '/blue-boost.png',
    category: 'SMOOTHIE + FRESH MILK',
  },

  // SMOOTHIE + YOGHURT
  {
    id: '4',
    name: 'LAVENDER KISS',
    description: 'Strawberry, Blueberry, Yoghurt',
    price: 29000,
    image: '/lavender-kiss.png',
    category: 'SMOOTHIE + YOGHURT',
  },
  {
    id: '5',
    name: 'SUNSET SCALES',
    description: 'Mango, Dragon Fruit, Yoghurt',
    price: 31000,
    image: '/sunset-scales.png',
    category: 'SMOOTHIE + YOGHURT',
  },
  {
    id: '6',
    name: 'ROSE GLOW',
    description: 'Mango, Strawberry, Yoghurt',
    price: 30000,
    image: '/rose-glow.png',
    category: 'SMOOTHIE + YOGHURT',
  },
];

interface HomeProps {
  onNavigateToCart: () => void;
}

export function Home({ onNavigateToCart }: HomeProps) {
  const { addToCart } = useCart();

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-100 to-pink-50 py-11 sm:py-17 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract Blob Background Pattern */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
          <svg
            className="absolute top-10 left-10 w-64 h-64 text-pink-300"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.1,86.1C-23,84.6,-37.9,78.6,-51.2,70.4C-64.5,62.2,-76.2,51.8,-82.8,38.2C-89.4,24.6,-90.9,7.8,-87.7,-7.6C-84.5,-23,-76.6,-36.9,-66.4,-48.6C-56.2,-60.3,-43.7,-69.8,-30.2,-77.5C-16.7,-85.2,-2.2,-91.1,11.2,-88.8C24.6,-86.5,30.6,-83.6,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>

          <svg
            className="absolute bottom-5 right-5 w-72 h-72 text-pink-300"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M39.5,-65.4C51.4,-58.5,61.3,-47.6,67.8,-35C74.3,-22.4,77.4,-8.1,76.2,5.7C75,19.5,69.5,32.8,61.2,44.2C52.9,55.6,41.8,65.1,28.9,71.4C16,77.7,1.3,80.8,-13.2,78.9C-27.7,77,-42,70.1,-54.2,60.5C-66.4,50.9,-76.5,38.6,-81.3,24.4C-86.1,10.2,-85.6,-5.9,-80.5,-20.3C-75.4,-34.7,-65.7,-47.4,-53.3,-54.1C-40.9,-60.8,-26.8,-61.5,-13.6,-63.2C-0.4,-64.9,12,-67.6,39.5,-65.4Z"
              transform="translate(100 100)"
            />
          </svg>

          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 text-pink-300"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M41.3,-72.1C53.4,-65.4,62.7,-54.2,69.3,-41.8C75.9,-29.4,79.8,-15.7,79.9,-2C80,14.7,76.3,31.4,68.5,45.6C60.7,59.8,48.8,71.5,34.9,77.9C21,84.3,5.1,85.4,-10.2,82.8C-25.5,80.2,-40.2,73.9,-52.8,65C-65.4,56.1,-75.9,44.6,-81.7,30.9C-87.5,17.2,-88.6,1.3,-85.4,-13.5C-82.2,-28.3,-74.7,-41.9,-64.5,-53.1C-54.3,-64.3,-41.4,-73.1,-27.6,-78.3C-13.8,-83.5,0.9,-85.1,14.4,-81.8C27.9,-78.5,29.2,-78.8,41.3,-72.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Watermark Logo Desktop */}
        <img
          src="/logo-last-summer.png"
          alt=""
          className="absolute right-10 top-1/2 -translate-y-1/2 w-[560px] opacity-[100] mix-blend-multiply pointer-events-none select-none hidden md:block"
        />

        {/* Content */}
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:max-w-xl md:ml-51 " >
            <h1 className="text-pink-600 mb-4">
              Segarnya Smoothie Buah Asli, Setiap Hari
            </h1>
            <p className="text-gray-600 mb-8 max-w-2xl md:max-w-md">
              Favorit pelanggan Last Summer dengan pilihan smoothie segar dari buah asli, dibuat setiap hari untuk menemani aktivitasmu.
            </p>

            <button
              onClick={onNavigateToCart}
              className="bg-pink-500 hover:bg-pink-600 text-white py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <div className="flex items-center justify-center mb-12 mt-8">
                <div className="inline-block bg-pink-100 px-8 py-3 rounded-full">
                  <h2 className="text-pink-500 text-center">{category}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {products
                  .filter((p) => p.category === category)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-50 py-8 px-4 text-center">
        <p className="text-gray-600 text-sm">
          Last Summer © 2025 – Kedai Jus Semarang
        </p>
      </footer>
    </div>
  );
}
