'use client';

import { Stack } from '@mantine/core';
import CategorySection from './categorySection';
import { CategoryType } from '@/types/menu';

export default function Menu({ data }: { data: CategoryType[] }) {
  return (
    <Stack gap="xl">
      {data.map((category) => (
        <CategorySection
          key={category.category}
          category={category}
        />
      ))}
    </Stack>
  );
}