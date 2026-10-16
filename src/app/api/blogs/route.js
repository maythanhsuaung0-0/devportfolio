import { getDatabase } from '../../../../utils/notion';

export async function GET() {
  const { props: results } = await getDatabase();
  return Response.json({ query: { results } });
}
