'use client';

import Link from 'next/link'
import {
  alpha,
  Box,
  Burger,
  Button,
  Collapse,
  Divider,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeControl } from '@/components/ColorSchemeControl';
import { NarrowContainer } from '@/components/NarrowContainer';
import { Anchor } from '@/components/Anchor';

const links = [
  { link: '/', label: 'About' },
  { link: '/research', label: 'Research' },
  { link: '/experience', label: 'Experience' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => (
    <Button 
      key={link.label}
      component={Link}
      href={link.link}
      radius="md"
      size="compact-sm"
      variant="subtle"
      color="var(--mantine-color-text)"
    >
      {link.label}
    </Button>
  ));
  const collapsedItems = links.map((link) => (
    <Anchor 
      key={link.label}
      component={Link}
      href={link.link}
      c="var(--mantine-color-text)"
    >
      {link.label}
    </Anchor>
  ));
  return (
    <Box
      w="100%"
      style={{
        position: "sticky", 
        top: 0, 
        backgroundColor: alpha("var(--mantine-color-body)", 0.8), 
        backdropFilter: "blur(5px)",
        zIndex: "100",
      }}
    >
      <header>
        <NarrowContainer>
          <Group justify="space-between" py="md">
            <Text fw={600}>
              Minhyeon Oh
            </Text>
            <Group h="100%" gap="sm" visibleFrom="sm">
              <Group gap="xs">
                {items}
              </Group>
              <ColorSchemeControl />
            </Group>
            <Burger
              opened={opened} 
              onClick={toggle} 
              hiddenFrom="sm" 
              size="sm" 
            />
          </Group>
          <Divider />
          <Collapse in={opened} hiddenFrom="sm">
            <Stack 
              gap="md" 
              py="md"
              align="flex-start"
            >
              {collapsedItems}
            </Stack>
            <Divider />
          </Collapse>
        </NarrowContainer>
      </header>
    </Box>
  );
}