import { useNavigate } from 'react-router';

import CategoriesSection from '@/Components/home/CategoriesSection';
import FeaturedBooks from '@/Components/home/FeaturedBooks';
import HeroSection from '@/Components/home/HeroSection';
import { useCart } from '@/context/CartContext';
import { categories, featuredBooks } from '@/data/mockBooks';

export default function Home() {
  const navigate = useNavigate();
  const { addToCart, toastMessage } = useCart();

  const handleAddToCart = (book) => {
    addToCart(book);
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedBooks books={featuredBooks} onAddToCart={handleAddToCart} />
      <CategoriesSection categories={categories} />

      {toastMessage ? (
        <div className="fixed bottom-6 right-6 z-50 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg">
          {toastMessage}
        </div>
      ) : null}
    </main>
  );
}
