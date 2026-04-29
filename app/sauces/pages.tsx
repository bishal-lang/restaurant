/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Title } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Menu from '@/components/menu/menu';
import { getBaseUrl } from '@/lib/getBaseURL';

async function getSauces() {
  const baseUrl = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/menu`, {
    cache: 'no-store',
  });

  if (!res.ok) return null;

  const data = await res.json();

  return data.find(
    (c: any) => c.category.toLowerCase() === 'sauces'
  );
}

export default async function SaucesPage() {
  const category = await getSauces();

  if (!category) {
    return (
      <>
        <Header />
        <Container py="xl">
          <Title>Sauces</Title>
          <p>No sauces found</p>
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
          Sauces
        </Title>

        <Menu data={[category]} />
      </Container>
      <Footer />
    </>
  );
}