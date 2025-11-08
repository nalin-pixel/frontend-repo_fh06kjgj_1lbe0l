import React from 'react';
import { Store, Shield, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="support" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 grid place-items-center">
                <Store className="h-5 w-5" />
              </div>
              <span className="font-semibold text-lg">PrimeVault</span>
            </div>
            <p className="mt-3 text-sm text-gray-400 max-w-sm">Your trusted source for premium app access. Secure checkout and instant delivery, backed by real support.</p>
          </div>

          <div>
            <div className="font-semibold text-white">Support</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Shield className="h-4 w-4" /> Refund & Replacement Policy</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> help@primevault.store</li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white">Newsletter</div>
            <p className="text-sm text-gray-400 mt-2">Get early access to drops and special offers.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="rounded-xl bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-500 flex flex-wrap items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} PrimeVault. All rights reserved.</span>
          <span>Secure payments • Instant delivery</span>
        </div>
      </div>
    </footer>
  );
}
