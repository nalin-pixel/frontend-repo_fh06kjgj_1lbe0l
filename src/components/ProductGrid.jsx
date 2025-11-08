import React from 'react';
import { Shield, Zap, Sparkles } from 'lucide-react';

const products = [
  {
    id: 'netflix',
    name: 'Netflix Premium',
    description: 'Ultra HD streaming on multiple devices with shared profiles.',
    price: 7.99,
    perks: ['4K UHD', 'Multiple profiles', 'Instant delivery'],
    gradient: 'from-red-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'youtube',
    name: 'YouTube Premium',
    description: 'Ad-free viewing, background play, and YouTube Music Premium.',
    price: 6.49,
    perks: ['Ad-free', 'Background play', 'YouTube Music'],
    gradient: 'from-rose-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'alight-motion',
    name: 'Alight Motion Pro',
    description: 'Unlock all effects, fonts, and premium export options.',
    price: 4.99,
    perks: ['All effects', 'No watermark', 'Premium export'],
    gradient: 'from-indigo-500 to-violet-500',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'spotify',
    name: 'Spotify Premium',
    description: 'Download offline, high-quality audio, and no ads.',
    price: 5.99,
    perks: ['Offline mode', 'High quality', 'No ads'],
    gradient: 'from-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductGrid({ onAdd }) {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Popular Premium Accounts</h2>
            <p className="text-gray-600 mt-1">Instant delivery after purchase, secure and guaranteed.</p>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
            <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> Verified</div>
            <div className="inline-flex items-center gap-2"><Zap className="h-4 w-4" /> Instant</div>
            <div className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Affordable</div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-black/10 overflow-hidden bg-white hover:shadow-xl transition">
              <div className="relative h-40 overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className={`absolute left-4 top-4 rounded-full bg-gradient-to-r ${p.gradient} text-white text-xs font-medium px-3 py-1 shadow`}>{p.perks[0]}</div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-2xl font-bold tracking-tight">${p.price.toFixed(2)}</div>
                  <button onClick={() => onAdd?.(p)} className="inline-flex items-center rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 active:scale-[.98] transition">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
