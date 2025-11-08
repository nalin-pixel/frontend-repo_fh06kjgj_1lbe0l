import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-fuchsia-100" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-indigo-600 text-xs font-medium mb-4">
              <Star className="h-4 w-4" /> Top-rated premium accounts
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Stream, Create, and Learn with Premium Access
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Instant delivery of verified accounts for Netflix, Alight Motion, YouTube Premium and more. Safe, fast, and affordable.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#products" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-3 text-white font-medium shadow-lg shadow-indigo-500/30 hover:opacity-95 transition">
                <Rocket className="h-5 w-5" /> Shop Popular Deals
              </a>
              <a href="#why-us" className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-gray-900 font-medium hover:shadow transition">
                Why Choose Us
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div>
                <div className="font-semibold text-gray-900">Instant Delivery</div>
                <div>Get access within minutes</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">24/7 Support</div>
                <div>Real humans, real fast</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-fuchsia-500/10 via-indigo-500/10 to-transparent rounded-[40px] blur-2xl pointer-events-none" />
            <div className="relative rounded-2xl bg-white border border-black/10 p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Netflix Premium', badge: '4K UHD', color: 'from-red-500 to-rose-500' },
                  { name: 'YouTube Premium', badge: 'Ad-free', color: 'from-rose-500 to-pink-500' },
                  { name: 'Alight Motion Pro', badge: 'All features', color: 'from-indigo-500 to-violet-500' },
                  { name: 'Spotify Premium', badge: 'Family', color: 'from-emerald-500 to-teal-500' },
                ].map((p) => (
                  <div key={p.name} className="rounded-xl border border-black/10 p-4 hover:shadow-md transition bg-gradient-to-br from-white to-gray-50">
                    <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${p.color} text-white grid place-items-center font-semibold`}>
                      {p.name.split(' ')[0][0]}
                    </div>
                    <div className="mt-3 font-semibold text-gray-900">{p.name}</div>
                    <div className="text-xs text-gray-500">{p.badge}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
