import { Container } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import Hero from '@/components/layout/hero';
import { menu } from '@/data/menu';

export default function Page() {
  const dessertCategory = menu.find(
    (category) => category.category.toLowerCase() === 'dessert'
  );

  // Ensure safe fallback
  const data = dessertCategory ? [dessertCategory] : [];
  return (
    <>
      <Header />
      <Hero />

      <Container size="lg" py="xl">
        <Menu data={data} />
      </Container>  

      <Footer />
    </>
  );
}