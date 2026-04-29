import { Container, Title } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import { menu } from '@/data/menu';

export default function MainsPage() {
  // Get only the "Mains" category
  const mainsCategory = menu.find(
    (category) => category.category.toLowerCase() === 'mains'
  );

  // Ensure safe fallback
  const data = mainsCategory ? [mainsCategory] : [];

  return (
    <>
      <Header />

      <Container size="lg" py="xl">
        <Title order={2} mb="lg">
          Mains
        </Title>

        {data.length > 0 ? (
          <Menu data={data} />
        ) : (
          <div>No items found</div>
        )}
      </Container>

      <Footer />
    </>
  );
}