import { redirect } from 'next/navigation';
import { getPortfolioData } from '../../../utils/portfolio';

export default async function ResumePage() {
  const { resumeUrl } = await getPortfolioData();

  if (resumeUrl) {
    redirect(resumeUrl);
  }

  return (
    <main className="p-6 text-white">
      Resume is not available yet.
    </main>
  );
}
