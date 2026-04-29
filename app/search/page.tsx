import { Container, Title, Divider } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import NoResults from '@/components/ui/noResults';
import { getBaseUrl } from '@/lib/getBaseURL';

async function getSearchResults(query: string) {
  const baseUrl = getBaseUrl();

  const res = await fetch(
    `${baseUrl}/api/search?q=${encodeURIComponent(query)}`,
    { cache: 'no-store' }
  );

  if (!res.ok) return [];

  return res.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q?.trim() || '';

  if (!query) {
    return (
      <>
        <Header />
        <Container size="lg" py="xl">
          <Title order={2}>Search</Title>
          <NoResults />
        </Container>
        <Footer />
      </>
    );
  }

  const data = await getSearchResults(query);

  return (
    <>
      <Header />

      <Container size="lg" py="xl">
        <Title order={2} mb="xs">
          Results for &quot;{query}&quot;
        </Title>

        <Divider mb="lg" />

        {data.length > 0 ? (
          <Menu data={data} />
        ) : (
          <NoResults query={query} />
        )}
      </Container>

      <Footer />
    </>
  );
}