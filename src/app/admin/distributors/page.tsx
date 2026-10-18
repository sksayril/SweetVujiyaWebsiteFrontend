'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  Building2,
  Search,
  Phone,
  Mail,
  MapPin,
  Clock,
  RefreshCw,
  Loader2,
  CheckCircle2,
  Trash2,
  Briefcase,
  TrendingUp,
  AlertCircle,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

interface Distributor {
  _id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  businessType: string;
  experience: string;
  monthlyVolume: string;
  message?: string;
  status: 'new' | 'reviewed' | 'contacted' | 'approved' | 'rejected';
  notes?: string;
  createdAt: string;
}

interface Stats {
  total: number;
  new: number;
  approved: number;
}

export default function AdminDistributorsPage() {
  const [applications, setApplications] = useState<Distributor[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, new: 0, approved: 0 });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchDistributors = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);
    setErrorMsg('');

    try {
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.set('status', statusFilter);
      if (searchTerm.trim()) params.set('search', searchTerm.trim());

      const res = await fetch(`/api/distributors?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to load distributor applications');

      const data = await res.json();
      setApplications(data.applications || []);
      if (data.stats) {
        setStats(data.stats);
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Error loading distributors');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [statusFilter, searchTerm]);

  useEffect(() => {
    fetchDistributors();
  }, [fetchDistributors]);

  const handleStatusChange = async (id: string, newStatus: Distributor['status']) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/distributors/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error('Failed to update status');

      setApplications((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status: newStatus } : app))
      );
      fetchDistributors(true);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Could not update status');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string, company: string) => {
    if (!window.confirm(`Delete application for "${company}"?`)) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/distributors/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete application');

      setApplications((prev) => prev.filter((a) => a._id !== id));
      fetchDistributors(true);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Could not delete application');
    } finally {
      setDeletingId(null);
    }
  };

  const cleanPhoneForWa = (rawPhone: string) => {
    const cleaned = rawPhone.replace(/\D/g, '');
    if (cleaned.length === 10) return `91${cleaned}`;
    return cleaned;
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  const getStatusBadge = (status: Distributor['status']) => {
    switch (status) {
      case 'new':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            New
          </span>
        );
      case 'reviewed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">
            Reviewed
          </span>
        );
      case 'contacted':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
            <Clock className="w-3 h-3 text-blue-600" />
            Contacted
          </span>
        );
      case 'approved':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
            <CheckCircle2 className="w-3 h-3 text-green-600" />
            Approved
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
            Rejected
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
            <Building2 className="h-8 w-8 text-orange-600" />
            Distributor Applications
          </h1>
          <p className="text-gray-500 mt-1">
            Review and manage dealership & wholesale partnership requests.
          </p>
        </div>

        <button
          onClick={() => fetchDistributors(true)}
          disabled={refreshing}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin text-orange-600' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Applications</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{stats.total}</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Briefcase className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex items-center justify-between border-l-4 border-l-orange-500">
          <div>
            <p className="text-sm font-medium text-gray-500">Pending Review (New)</p>
            <p className="text-3xl font-bold text-orange-600 mt-1">{stats.new}</p>
          </div>
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
            <AlertCircle className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Approved Partners</p>
            <p className="text-3xl font-bold text-green-600 mt-1">{stats.approved}</p>
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
          {[
            { key: 'all', label: 'All' },
            { key: 'new', label: 'New' },
            { key: 'reviewed', label: 'Reviewed' },
            { key: 'contacted', label: 'Contacted' },
            { key: 'approved', label: 'Approved' },
            { key: 'rejected', label: 'Rejected' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setStatusFilter(tab.key)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                statusFilter === tab.key
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search company, city, contact..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-orange-600 mb-3" />
            <p className="text-gray-500 text-sm">Loading distributor applications...</p>
          </div>
        ) : errorMsg ? (
          <div className="p-8 text-center text-red-600">
            <AlertCircle className="h-10 w-10 mx-auto mb-2" />
            <p className="font-semibold">{errorMsg}</p>
          </div>
        ) : applications.length === 0 ? (
          <div className="py-20 text-center px-4">
            <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-1">No Applications Found</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Submissions from the &quot;Apply to Become a Distributor&quot; form will automatically appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <th className="py-3.5 px-4">Company & Contact</th>
                  <th className="py-3.5 px-4">Location</th>
                  <th className="py-3.5 px-4">Business Profile</th>
                  <th className="py-3.5 px-4">Volume & Notes</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {applications.map((app) => (
                  <tr key={app._id} className="hover:bg-gray-50/80 transition-colors">
                    {/* Company & Contact */}
                    <td className="py-4 px-4 align-top">
                      <div className="font-bold text-gray-900 text-base">{app.companyName}</div>
                      <div className="text-xs text-gray-600 mt-0.5">Contact: <span className="font-medium text-gray-800">{app.contactPerson}</span></div>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <a
                          href={`tel:${app.phone}`}
                          className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <Phone className="h-3 w-3" />
                          <span>{app.phone}</span>
                        </a>

                        <a
                          href={`https://wa.me/${cleanPhoneForWa(app.phone)}?text=${encodeURIComponent(
                            `Hello ${app.contactPerson}, regarding your dealership/distributor application for ${app.companyName} with Krishna & Kanha Sales Enterprises:`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] bg-green-50 text-green-700 hover:bg-green-100 font-medium border border-green-200"
                        >
                          <MessageSquare className="h-3 w-3 text-green-600" />
                          <span>WhatsApp</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      </div>

                      <a
                        href={`mailto:${app.email}`}
                        className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 mt-1"
                      >
                        <Mail className="h-3 w-3" />
                        <span>{app.email}</span>
                      </a>
                    </td>

                    {/* Location */}
                    <td className="py-4 px-4 align-top text-xs text-gray-600 max-w-xs">
                      <div className="flex items-start gap-1">
                        <MapPin className="h-3.5 w-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">{app.city}, {app.state}</p>
                          <p className="text-gray-500">{app.address}</p>
                          <p className="text-gray-400">PIN: {app.pincode}</p>
                        </div>
                      </div>
                    </td>

                    {/* Business Profile */}
                    <td className="py-4 px-4 align-top text-xs">
                      <div className="space-y-1">
                        <div>
                          <span className="text-gray-500">Type:</span>{' '}
                          <span className="font-semibold text-gray-800">{app.businessType}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Experience:</span>{' '}
                          <span className="font-medium text-gray-700">{app.experience}</span>
                        </div>
                      </div>
                    </td>

                    {/* Volume & Message */}
                    <td className="py-4 px-4 align-top text-xs max-w-xs">
                      <div className="flex items-center gap-1 font-semibold text-orange-700 bg-orange-50 px-2 py-0.5 rounded w-fit mb-1 border border-orange-200">
                        <TrendingUp className="h-3 w-3" />
                        <span>{app.monthlyVolume}</span>
                      </div>
                      {app.message && (
                        <p className="text-gray-600 whitespace-pre-wrap bg-gray-50 p-1.5 rounded border border-gray-100 mt-1 text-[11px]">
                          {app.message}
                        </p>
                      )}
                    </td>

                    {/* Date */}
                    <td className="py-4 px-4 align-top whitespace-nowrap text-xs text-gray-500">
                      {formatDate(app.createdAt)}
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-4 px-4 align-top whitespace-nowrap">
                      <div className="space-y-1.5">
                        <div>{getStatusBadge(app.status)}</div>
                        <select
                          value={app.status}
                          disabled={updatingId === app._id}
                          onChange={(e) =>
                            handleStatusChange(app._id, e.target.value as Distributor['status'])
                          }
                          className="text-xs border border-gray-300 rounded-md px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        >
                          <option value="new">Mark as New</option>
                          <option value="reviewed">Mark as Reviewed</option>
                          <option value="contacted">Mark as Contacted</option>
                          <option value="approved">Mark as Approved</option>
                          <option value="rejected">Mark as Rejected</option>
                        </select>
                      </div>
                    </td>

                    {/* Delete Action */}
                    <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(app._id, app.companyName)}
                        disabled={deletingId === app._id}
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Application"
                      >
                        {deletingId === app._id ? (
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
