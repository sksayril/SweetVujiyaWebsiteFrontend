'use client';

import { useEffect, useState } from 'react';
import { Loader2, Save } from 'lucide-react';

const sections = [
  { key: 'hero', label: 'Hero Section', fields: ['title', 'tagline', 'subtitle', 'quote', 'slogan', 'videoUrl', 'fallbackImage'] },
  { key: 'contact', label: 'Contact Info', fields: ['phone', 'email', 'address', 'whatsapp'] },
  { key: 'about', label: 'About Section', fields: ['heading'] },
  { key: 'sweetsPromo', label: 'Sweets Promo', fields: ['title'] },
];

export default function AdminContentPage() {
  const [content, setContent] = useState<Record<string, Record<string, string>>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/site-content')
      .then((r) => r.json())
      .then((d) => {
        const map: Record<string, Record<string, string>> = {};
        (d.contents || []).forEach((c: { section: string; data: Record<string, string> }) => {
          map[c.section] = c.data as Record<string, string>;
        });
        setContent(map);
      })
      .finally(() => setLoading(false));
  }, []);

  const updateField = (section: string, field: string, value: string) => {
    setContent((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const saveSection = async (section: string) => {
    setSaving(section);
    setMessage('');
    try {
      const res = await fetch('/api/site-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, data: content[section] || {} }),
      });
      if (!res.ok) throw new Error('Save failed');
      setMessage(`${section} saved successfully!`);
    } catch {
      setMessage('Failed to save');
    } finally {
      setSaving(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-cinzel font-bold text-gray-900 mb-2">Site Content</h1>
      <p className="text-gray-500 mb-8">Edit website text and settings shown on the frontend</p>

      {message && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 text-sm">
          {message}
        </div>
      )}

      <div className="space-y-8">
        {sections.map(({ key, label, fields }) => (
          <div key={key} className="bg-white rounded-xl border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">{label}</h2>
              <button
                onClick={() => saveSection(key)}
                disabled={saving === key}
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
              >
                {saving === key ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                Save
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fields.map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {field.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    type="text"
                    value={content[key]?.[field] || ''}
                    onChange={(e) => updateField(key, field, e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
