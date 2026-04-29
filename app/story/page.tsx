import { Container, Title, Text, Stack } from '@mantine/core';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function StoryPage() {
  return (
    <>
      <Header />

      <Container size="md" py="xl">
        <Stack>
          <Title order={1}>Our Story</Title>

          <Text c="dimmed">
            We believe in seasonal ingredients, thoughtful preparation,
            and creating a dining experience that feels both modern and timeless.
          </Text>

          <Text c="dimmed">
            Every dish is crafted with precision, inspired by global flavors
            and local produce.
          </Text>
        </Stack>
      </Container>

      <Footer />
    </>
  );
}