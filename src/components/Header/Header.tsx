'use client';

import Link from 'next/link'
import { useState } from 'react';
import {
  alpha,
  Box,
  Burger,
  Center,
  Container,
  Collapse,
  Divider,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeControl } from '@/components/ColorSchemeControl';
import { NarrowContainer } from '@/components/NarrowContainer';
import classes from './Header.module.css';

const links = [
  { link: '/', label: 'About' },
  { link: '/research', label: 'Research' },
  { link: '/experience', label: 'Experience' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      // data-active={active === link.link || undefined} // comment
      onNavigate={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));
  const collapsedItems = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.hidden}
      // data-active={active === link.link || undefined}
      onNavigate={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));
  return (
    <header>
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
        <NarrowContainer>
          <Group justify="space-between" py="md">
            <Text fw={600}>
              Minhyeon Oh
            </Text>
            <Group h="100%" gap="sm" visibleFrom="sm">
              <Group gap="0ex">
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
            <Stack gap="md" py="md">
              {collapsedItems}
            </Stack>
            <Divider />
          </Collapse>
        </NarrowContainer>
      </Box>
    </header>
  );
}