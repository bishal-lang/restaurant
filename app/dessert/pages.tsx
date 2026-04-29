/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Title } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import { getBaseUrl } from '@/lib/getBaseURL';

async function getDesserts() {
  const baseUrl = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/menu`, {
    cache: 'no-store',
  });

  if (!res.ok) return null;

  const data = await res.json();

  return data.find(
    (c: any) => c.category.toLowerCase() === 'desserts'
  );
}

export default async function DessertsPage() {
  const category = await getDesserts();

  if (!category) {
    return (
      <>
        <Header />
        <Container py="xl">
          <Title>Desserts</Title>
          <p>No desserts found</p>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container size="lg" py="xl">
        <Title order={2} mb="lg">
          Desserts
        </Title>

        <Menu data={[category]} />
      </Container>
      <Footer />
    </>
  );
}