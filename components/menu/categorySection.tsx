'use client';

import { Stack, Title, SimpleGrid } from '@mantine/core';
import MenuItem from './menuItem';
import { CategoryType } from '@/types/menu';

export default function CategorySection({
  category,
}: {
  category: CategoryType;
}) {
  if (!category.items || category.items.length === 0) return null;

  return (
    <Stack>
      <Title order={2}>{category.category}</Title>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}