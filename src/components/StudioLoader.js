'use client';

import dynamic from 'next/dynamic';

const SanityStudio = dynamic(() => import('./SanityStudio'), {
  ssr: false,
  loading: () => <p className="p-6 text-white">Loading Studio…</p>,
});

export default function StudioLoader() {
  return <SanityStudio />;
}
