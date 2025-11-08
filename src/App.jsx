import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import WhyUs from './components/WhyUs.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setToast({ message: `${product.name} added to cart`, id: Date.now() });
    setTimeout(() => setToast(null), 1800);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <ProductGrid onAdd={handleAddToCart} />
        <WhyUs />
      </main>
      <Footer />

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="rounded-xl bg-gray-900 text-white px-4 py-2 shadow-lg border border-white/10">
            {toast.message}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
