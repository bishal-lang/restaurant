import { Container, Title } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import { CategoryType } from '@/types/menu';
import Hero from '@/components/layout/hero';

async function getMenu(): Promise<CategoryType[]> {
  const res = await fetch('http://localhost:3000/api/menu', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch menu');
  }

  return res.json();
}

export default async function MainsPage() {
  const data = await getMenu();

  const mains = data.filter((cat) =>
    cat.category.toLowerCase().includes('main')
  );

  return (
    <>
      <Header />
      <Hero />
      <Container size="lg" py="xl">
        <Menu data={mains} />
      </Container>

      <Footer />
    </>
  );
}