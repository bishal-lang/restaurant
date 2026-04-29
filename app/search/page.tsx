import { Container, Title, Divider } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import NoResults from '@/components/ui/noResults';
import { menu } from '@/data/menu';

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q?.trim().toLowerCase() || '';

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
      items: category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      ),
    }))
    .filter((category) => category.items.length > 0);

  const hasResults = filtered.length > 0;

  return (
    <>
      <Header />

      <Container size="lg" py="xl">
        <Title order={2} mb="xs">
          Results for &quot;{query}&quot;
        </Title>

        <Divider mb="lg" />

        {hasResults ? (
          <Menu data={filtered} />
        ) : (
          <NoResults query={query} />
        )}
      </Container>

      <Footer />
    </>
  );
}