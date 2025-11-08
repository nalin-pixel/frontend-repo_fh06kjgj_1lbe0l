import React from 'react';
import { ShieldCheck, Timer, Headphones } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Guaranteed Access',
      desc: 'All accounts are verified. If something breaks, we fix or replace fast.'
    },
    {
      icon: Timer,
      title: 'Instant Delivery',
      desc: 'Automation delivers your credentials within minutes after checkout.'
    },
    {
      icon: Headphones,
      title: '24/7 Human Support',
      desc: 'Talk to real people any time via live chat or email.'
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Why choose PrimeVault</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">We combine secure provisioning with friendly human support so you can enjoy your favorite services without hassle.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-semibold text-gray-900">{f.title}</div>
              <div className="text-sm text-gray-600 mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
