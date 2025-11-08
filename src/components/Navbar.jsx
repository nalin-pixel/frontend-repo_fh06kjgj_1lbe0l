import React from 'react';
import { ShoppingCart, Store, ShieldCheck } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30 flex items-center justify-center">
            <Store className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-lg tracking-tight">PrimeVault</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#products" className="hover:text-gray-900 transition">Products</a>
          <a href="#why-us" className="hover:text-gray-900 transition">Why Us</a>
          <a href="#support" className="hover:text-gray-900 transition">Support</a>
          <div className="flex items-center gap-2 text-gray-500">
            <ShieldCheck className="h-4 w-4" />
            <span className="hidden sm:block">Secure & Instant Delivery</span>
          </div>
        </div>

        <button className="relative inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:shadow transition" aria-label="Cart">
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden sm:block">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 min-w-[20px] rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-1.5 text-xs text-white grid place-items-center">
              {cartCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
