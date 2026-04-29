import { Container } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import { CategoryType } from '@/types/menu';
import Hero from '@/components/layout/hero';

async function getMenu(): Promise<CategoryType[]> {
  const res = await fetch('/api/menu', {
    cache: 'no-store', // or remove if static
  });

  if (!res.ok) {
    throw new Error('Failed to fetch menu');
  }

  return res.json();
}



export default async function Page() {
  const data = await getMenu();

  const entree = data.filter((cat) =>
    cat.category.toLowerCase().includes('entr')
  );

  return (
    <>
      <Header />
      <Hero />
      <Container size="lg" py="xl">
        <Menu data={entree} />
      </Container>

      <Footer />
    </>
  );
}