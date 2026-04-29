import { Container, Title, Divider } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import NoResults from '@/components/ui/noResults';
import { menu } from '@/data/menu';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  // ✅ THIS IS THE FIX
  const params = await searchParams;

  const query = params.q?.trim().toLowerCase() || '';

  console.log('QUERY:', query); // check Vercel logs

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

  const filtered = menu
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        const text =
          `${item.name} ${item.description}`.toLowerCase();

        return text.includes(query);
      }),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <>
      <Header />

      <Container size="lg" py="xl">
        <Title order={2} mb="xs">
          Results for &quot;{query}&quot;
        </Title>

        <Divider mb="lg" />

        {filtered.length > 0 ? (
          <Menu data={filtered} />
        ) : (
          <NoResults query={query} />
        )}
      </Container>

      <Footer />
    </>
  );
}