import { menu } from '@/data/menu';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const queryParam = url.searchParams.get('q');

  const query = queryParam?.trim().toLowerCase() || '';

  console.log('QUERY:', query);

  if (!query) {
    return Response.json(menu);
  }

  const filtered = menu
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        const name = item.name.toLowerCase();
        const desc = item.description.toLowerCase();

        return name.includes(query) || desc.includes(query);
      }),
    }))
    .filter((category) => category.items.length > 0);

  return Response.json(filtered);
}