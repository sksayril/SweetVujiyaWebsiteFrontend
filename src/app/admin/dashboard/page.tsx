'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Package, Star, Cookie, Loader2, Database } from 'lucide-react';

interface Stats {
  total: number;
  products: number;
  sweets: number;
  namkeen: number;
  featured: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState('');

  useEffect(() => {
    fetch('/api/auth/me').then((r) => r.json()).then((d) => d.user && setUser(d.user));
    fetch('/api/products?active=false')
      .then((r) => r.json())
      .then((d) => {
        const products = d.products || [];
        setStats({
          total: products.length,
          products: products.filter((p: { type: string }) => p.type === 'product').length,
          sweets: products.filter((p: { type: string }) => p.type === 'sweet').length,
          namkeen: products.filter((p: { type: string }) => p.type === 'namkeen').length,
          featured: products.filter((p: { featured?: boolean }) => p.featured).length,
        });
      });
  }, []);

  const handleSeed = async () => {
    setSeeding(true);
    setSeedMsg('');
    try {
      const res = await fetch('/api/seed', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Seed failed');
      setSeedMsg(`Seeded ${data.count} products successfully!`);
      window.location.reload();
    } catch (err) {
      setSeedMsg(err instanceof Error ? err.message : 'Seed failed');
    } finally {
      setSeeding(false);
    }
  };

  const cards = [
    { label: 'Total Products', value: stats?.total ?? '—', icon: Package, color: 'bg-blue-500' },
    { label: 'General Products', value: stats?.products ?? '—', icon: Package, color: 'bg-orange-500' },
    { label: 'Sweets', value: stats?.sweets ?? '—', icon: Cookie, color: 'bg-pink-500' },
    { label: 'Namkeen', value: stats?.namkeen ?? '—', icon: Star, color: 'bg-green-500' },
    { label: 'Featured', value: stats?.featured ?? '—', icon: Star, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-cinzel font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Welcome{user ? `, ${user.name}` : ''}! Manage your website content.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {cards.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl shadow-sm border p-6">
            <div className={`${color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/admin/products/new"
              className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              + Add New Product
            </Link>
            <Link
              href="/admin/products"
              className="block w-full text-center border border-gray-300 hover:bg-gray-50 py-3 rounded-lg font-medium transition-colors"
            >
              Manage All Products
            </Link>
            <Link
              href="/admin/content"
              className="block w-full text-center border border-gray-300 hover:bg-gray-50 py-3 rounded-lg font-medium transition-colors"
            >
              Edit Site Content
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Initial Data Setup</h2>
          <p className="text-sm text-gray-500 mb-4">
            Import all existing products from the website into MongoDB (one-time).
          </p>
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
          >
            {seeding ? <Loader2 className="h-4 w-4 animate-spin" /> : <Database className="h-4 w-4" />}
            Seed Products from Website
          </button>
          {seedMsg && <p className="text-sm mt-3 text-green-600">{seedMsg}</p>}
        </div>
      </div>
    </div>
  );
}
