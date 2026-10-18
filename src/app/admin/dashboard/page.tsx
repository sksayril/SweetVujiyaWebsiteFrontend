'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Package, Star, Cookie, Loader2, Database, Users, Building2, UserCheck } from 'lucide-react';

interface Stats {
  total: number;
  products: number;
  sweets: number;
  namkeen: number;
  featured: number;
  leads?: number;
  newLeads?: number;
  distributors?: number;
  newDistributors?: number;
  applications?: number;
  newApplications?: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState('');

  useEffect(() => {
    fetch('/api/auth/me').then((r) => r.json()).then((d) => d.user && setUser(d.user));
    
    Promise.all([
      fetch('/api/products?active=false').then((r) => r.json()),
      fetch('/api/leads').then((r) => (r.ok ? r.json() : { stats: { total: 0, new: 0 } })),
      fetch('/api/distributors').then((r) => (r.ok ? r.json() : { stats: { total: 0, new: 0 } })),
      fetch('/api/applications').then((r) => (r.ok ? r.json() : { stats: { total: 0, new: 0 } })),
    ]).then(([prodData, leadData, distData, appData]) => {
      const products = prodData.products || [];
      setStats({
        total: products.length,
        products: products.filter((p: { type: string }) => p.type === 'product').length,
        sweets: products.filter((p: { type: string }) => p.type === 'sweet').length,
        namkeen: products.filter((p: { type: string }) => p.type === 'namkeen').length,
        featured: products.filter((p: { featured?: boolean }) => p.featured).length,
        leads: leadData.stats?.total || 0,
        newLeads: leadData.stats?.new || 0,
        distributors: distData.stats?.total || 0,
        newDistributors: distData.stats?.new || 0,
        applications: appData.stats?.total || 0,
        newApplications: appData.stats?.new || 0,
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
    {
      label: 'Price Inquiries',
      value: stats?.leads ?? '—',
      icon: Users,
      color: 'bg-red-500',
      badge: stats?.newLeads ? `${stats.newLeads} new` : undefined,
    },
    {
      label: 'Distributor Apps',
      value: stats?.distributors ?? '—',
      icon: Building2,
      color: 'bg-emerald-600',
      badge: stats?.newDistributors ? `${stats.newDistributors} new` : undefined,
    },
    {
      label: 'Job Applicants',
      value: stats?.applications ?? '—',
      icon: UserCheck,
      color: 'bg-indigo-600',
      badge: stats?.newApplications ? `${stats.newApplications} new` : undefined,
    },
    { label: 'Total Products', value: stats?.total ?? '—', icon: Package, color: 'bg-blue-500' },
    { label: 'Sweets', value: stats?.sweets ?? '—', icon: Cookie, color: 'bg-pink-500' },
    { label: 'Namkeen', value: stats?.namkeen ?? '—', icon: Star, color: 'bg-amber-500' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-cinzel font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Welcome{user ? `, ${user.name}` : ''}! Manage your website inquiries, applications, and content.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {cards.map(({ label, value, icon: Icon, color, badge }) => (
          <div key={label} className="bg-white rounded-xl shadow-sm border p-5 relative">
            {badge && (
              <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 animate-pulse">
                {badge}
              </span>
            )}
            <div className={`${color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Inquiries & Applications</h2>
          <div className="space-y-3">
            <Link
              href="/admin/leads"
              className="block w-full text-center bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white py-2.5 rounded-lg font-medium transition-colors shadow-sm"
            >
              View Customer Inquiries ({stats?.leads ?? 0})
            </Link>
            <Link
              href="/admin/distributors"
              className="block w-full text-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-2.5 rounded-lg font-medium transition-colors shadow-sm"
            >
              View Distributor Applications ({stats?.distributors ?? 0})
            </Link>
            <Link
              href="/admin/applications"
              className="block w-full text-center bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors shadow-sm"
            >
              View Job Applications ({stats?.applications ?? 0})
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Management</h2>
          <div className="space-y-3">
            <Link
              href="/admin/products/new"
              className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-lg font-medium transition-colors"
            >
              + Add New Product
            </Link>
            <Link
              href="/admin/products"
              className="block w-full text-center border border-gray-300 hover:bg-gray-50 py-2.5 rounded-lg font-medium transition-colors"
            >
              Manage All Products
            </Link>
            <Link
              href="/admin/content"
              className="block w-full text-center border border-gray-300 hover:bg-gray-50 py-2.5 rounded-lg font-medium transition-colors"
            >
              Edit Site Content
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">
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
  );
}
