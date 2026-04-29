import { Container } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import Hero from '@/components/layout/hero';
import { menu } from '@/data/menu';

export default function Page() {
  const sidesCategory = menu.find(
    (category) => category.category.toLowerCase() === 'sauces'
  );

  // Ensure safe fallback
  const data = sidesCategory ? [sidesCategory] : [];
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