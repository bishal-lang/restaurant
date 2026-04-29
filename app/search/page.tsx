import { Container, Title, Divider } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import NoResults from '@/components/ui/noResults';
import { CategoryType } from '@/types/menu';

async function getSearchResults(query: string): Promise<CategoryType[]> {
  const res = await fetch(
    `/api/search?q=${encodeURIComponent(query)}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch search results');
  }

  return res.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>; // 👈 now a Promise
}) {
  // 🔥 FIX: await searchParams
  const params = await searchParams;
  const query = params?.q?.trim() || '';

  // Empty search
  if (!query) {
    return (
      <>
        <Header />

        <Container size="lg" py="xl">
          <Title order={2} mb="lg">
            Search
          </Title>

          <NoResults />
        </Container>

        <Footer />
      </>
    );
  }

  const data = await getSearchResults(query);

  // Safe result check
  const hasResults = data.some(
    (cat) => Array.isArray(cat.items) && cat.items.length > 0
  );

  return (
    <>
      <Header />

      <Container size="lg" py="xl">
        <Title order={2} mb="xs">
          {`Results for "${query}"`}
        </Title>

        <Divider mb="lg" />

        {hasResults ? (
          <Menu data={data} />
        ) : (
          <NoResults query={query} />
        )}
      </Container>

      <Footer />
    </>
  );
}