'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  Users,
  Search,
  Phone,
  Mail,
  MessageSquare,
  Trash2,
  CheckCircle2,
  Clock,
  RefreshCw,
  Loader2,
  Package,
  Calendar,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

interface Lead {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  productName?: string;
  quantity?: string;
  message?: string;
  type: 'price_inquiry' | 'contact' | 'bulk_order' | 'distributor';
  status: 'new' | 'contacted' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface Stats {
  total: number;
  new: number;
  contacted: number;
  completed: number;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, new: 0, contacted: 0, completed: 0 });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'completed'>('all');
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchLeads = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);
    setErrorMsg('');

    try {
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.set('status', statusFilter);
      if (searchTerm.trim()) params.set('search', searchTerm.trim());

      const res = await fetch(`/api/leads?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to load leads');

      const data = await res.json();
      setLeads(data.leads || []);
      if (data.stats) {
        setStats(data.stats);
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Error loading leads');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [statusFilter, searchTerm]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const handleStatusChange = async (id: string, newStatus: Lead['status']) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error('Failed to update status');

      setLeads((prev) =>
        prev.map((lead) => (lead._id === id ? { ...lead, status: newStatus } : lead))
      );
      // Refresh stats
      fetchLeads(true);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Could not update status');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete lead from "${name}"?`)) {
      return;
    }

    setDeletingId(id);
    try {
      const res = await fetch(`/api/leads/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete lead');

      setLeads((prev) => prev.filter((l) => l._id !== id));
      fetchLeads(true);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Could not delete lead');
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateStr;
    }
  };

  const cleanPhoneForWa = (rawPhone: string) => {
    const cleaned = rawPhone.replace(/\D/g, '');
    if (cleaned.length === 10) return `91${cleaned}`;
    return cleaned;
  };

  const getStatusBadge = (status: Lead['status']) => {
    switch (status) {
      case 'new':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            New Lead
          </span>
        );
      case 'contacted':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
            <Clock className="w-3 h-3 text-blue-600" />
            Contacted
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
            <CheckCircle2 className="w-3 h-3 text-green-600" />
            Completed
          </span>
        );
      case 'cancelled':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
            Cancelled
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-cinzel font-bold text-gray-900 flex items-center gap-3">
            <Users className="h-8 w-8 text-orange-600" />
            Customer Leads & Inquiries
          </h1>
          <p className="text-gray-500 mt-1">
            Real-time inquiries received from &quot;Contact for Price&quot; and website forms.
          </p>
        </div>

        <button
          onClick={() => fetchLeads(true)}
          disabled={refreshing}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin text-orange-600' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Inquiries</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.total}</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Users className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex items-center justify-between border-l-4 border-l-orange-500">
          <div>
            <p className="text-sm font-medium text-gray-500">New Leads</p>
            <p className="text-3xl font-bold text-orange-600 mt-1">{stats.new}</p>
          </div>
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
            <AlertCircle className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Contacted</p>
            <p className="text-3xl font-bold text-blue-600 mt-1">{stats.contacted}</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Clock className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Completed Deals</p>
            <p className="text-3xl font-bold text-green-600 mt-1">{stats.completed}</p>
          </div>
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Status Tabs */}
        <div className="flex items-center space-x-1 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          {(
            [
              { key: 'all', label: 'All Inquiries', count: stats.total },
              { key: 'new', label: 'New', count: stats.new },
              { key: 'contacted', label: 'Contacted', count: stats.contacted },
              { key: 'completed', label: 'Completed', count: stats.completed },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setStatusFilter(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                statusFilter === tab.key
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  statusFilter === tab.key ? 'bg-orange-700 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, phone, product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Leads Table / List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-orange-600 mb-3" />
            <p className="text-gray-500 text-sm">Loading customer inquiries...</p>
          </div>
        ) : errorMsg ? (
          <div className="p-8 text-center text-red-600">
            <AlertCircle className="h-10 w-10 mx-auto mb-2" />
            <p className="font-semibold">{errorMsg}</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="py-20 text-center px-4">
            <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-1">No Leads Found</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              {searchTerm || statusFilter !== 'all'
                ? 'No inquiries match your current filter. Try clearing your search.'
                : 'Customer inquiries submitted via the "Contact for Price" or contact form will automatically appear here.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <th className="py-3.5 px-4">Customer</th>
                  <th className="py-3.5 px-4">Product / Requirement</th>
                  <th className="py-3.5 px-4">Message / Notes</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {leads.map((lead) => (
                  <tr key={lead._id} className="hover:bg-gray-50/80 transition-colors">
                    {/* Customer Info */}
                    <td className="py-4 px-4 align-top">
                      <div className="font-semibold text-gray-900">{lead.name}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <a
                          href={`tel:${lead.phone}`}
                          className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline"
                          title="Call Customer"
                        >
                          <Phone className="h-3 w-3" />
                          <span>{lead.phone}</span>
                        </a>

                        <a
                          href={`https://wa.me/${cleanPhoneForWa(lead.phone)}?text=${encodeURIComponent(
                            `Hello ${lead.name}, regarding your price inquiry for ${lead.productName || 'our sweets and namkeen'} from Krishna & Kanha Sales:`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] bg-green-50 text-green-700 hover:bg-green-100 font-medium border border-green-200"
                          title="Chat on WhatsApp"
                        >
                          <MessageSquare className="h-3 w-3 text-green-600" />
                          <span>WhatsApp</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      </div>

                      {lead.email && (
                        <a
                          href={`mailto:${lead.email}`}
                          className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 mt-1 truncate max-w-xs"
                          title="Email Customer"
                        >
                          <Mail className="h-3 w-3 flex-shrink-0" />
                          <span className="truncate">{lead.email}</span>
                        </a>
                      )}
                    </td>

                    {/* Product & Quantity */}
                    <td className="py-4 px-4 align-top">
                      <div className="flex items-center gap-1.5 font-medium text-gray-900">
                        <Package className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span>{lead.productName || 'General Inquiry'}</span>
                      </div>
                      {lead.quantity && (
                        <div className="text-xs text-gray-500 mt-1">
                          <span className="font-medium text-gray-700">Quantity:</span> {lead.quantity}
                        </div>
                      )}
                      <span className="inline-block mt-1 text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                        {lead.type.replace('_', ' ')}
                      </span>
                    </td>

                    {/* Message / Requirement */}
                    <td className="py-4 px-4 align-top max-w-xs">
                      {lead.message ? (
                        <p className="text-gray-700 text-xs leading-relaxed whitespace-pre-wrap bg-gray-50 p-2 rounded-lg border border-gray-100">
                          {lead.message}
                        </p>
                      ) : (
                        <span className="text-xs text-gray-400 italic">No message provided</span>
                      )}
                    </td>

                    {/* Date */}
                    <td className="py-4 px-4 align-top whitespace-nowrap text-xs text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-gray-400" />
                        <span>{formatDate(lead.createdAt)}</span>
                      </div>
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-4 px-4 align-top whitespace-nowrap">
                      <div className="space-y-1.5">
                        <div>{getStatusBadge(lead.status)}</div>
                        <select
                          value={lead.status}
                          disabled={updatingId === lead._id}
                          onChange={(e) =>
                            handleStatusChange(lead._id, e.target.value as Lead['status'])
                          }
                          className="text-xs border border-gray-300 rounded-md px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        >
                          <option value="new">Mark as New</option>
                          <option value="contacted">Mark as Contacted</option>
                          <option value="completed">Mark as Completed</option>
                          <option value="cancelled">Mark as Cancelled</option>
                        </select>
                      </div>
                    </td>

                    {/* Delete Action */}
                    <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(lead._id, lead.name)}
                        disabled={deletingId === lead._id}
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Lead"
                      >
                        {deletingId === lead._id ? (
                          <Loader2 className="h-4 w-4 animate-spin text-red-600" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
