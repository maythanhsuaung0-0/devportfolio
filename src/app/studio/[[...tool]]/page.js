import StudioLoader from '@/components/StudioLoader';

export const metadata = {
  title: 'Portfolio Studio',
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
    return (
      <main className="min-h-screen p-8">
        <h1 className="mb-4 text-2xl font-semibold">Connect your Sanity project</h1>
        <p>
          Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in
          .env.local, then restart the development server to open Studio.
        </p>
      </main>
    );
  }

  return (
    <main className="fixed inset-0 overflow-auto">
      <StudioLoader />
    </main>
  );
}
