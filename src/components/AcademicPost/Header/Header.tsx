
'use client';

import { 
  IconChevronDown, 
  IconBrandGithub,
  IconFileDescription,
  IconDatabase,
} from '@tabler/icons-react';
import {
  alpha,
  Box,
  Button,
  Collapse,
  Divider,
  Group,
  TableOfContents,
  Text,
  UnstyledButton,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeControl } from '@/components/ColorSchemeControl';
import { NarrowContainer } from '@/components/NarrowContainer';

interface LinkProps {
  paper?: any;
  code?: any;
  dataset?: any;
}

export function Header({ links } : LinkProps) {
  console.log(links.paper);
  const [openedToC, { toggle: toggleToC }] = useDisclosure(false);
  return (
    <Box 
      w="100%"
      // bg={alpha("body", 0.9)}
      style={{
        position: "sticky", 
        top: 0, 
        backgroundColor: alpha("var(--mantine-color-body)", 0.9), 
        backdropFilter: "blur(5px)",
        zIndex: "100",
      }}
    >
      <NarrowContainer>
        <Group gap="0" py="md" justify="space-between">
          <Group gap="0">
            <Text size="md" fw={700}>
              On this page
            </Text>
            <Button 
              onClick={toggleToC} 
              variant='transparent' 
              size="compact-md"
            >
              <IconChevronDown
                // stroke={1.5}
                size={17}
                style={{ 
                  transform: openedToC ? 'rotate(-180deg)' : 'none' , 
                  transition: "transform 200ms ease"
                }}
              />
            </Button>
          </Group>
          <Group gap="md">
            {links.paper &&
              <Tooltip label="Paper">
                <UnstyledButton>
                  <IconFileDescription style={{display: "block"}} />
                </UnstyledButton>
              </Tooltip>
            }
            {links.code &&
              <Tooltip label="Source code">
                <UnstyledButton>
                  <IconBrandGithub style={{display: "block"}} />
                </UnstyledButton>
              </Tooltip>
            }
            {links.dataset &&
              <Tooltip label="Dataset">
                <UnstyledButton>
                  <IconDatabase style={{display: "block"}} />
                </UnstyledButton>
              </Tooltip>
            }
            <ColorSchemeControl />
          </Group>
        </Group>
        <Collapse in={openedToC}>
          <TableOfContents
            pb="lg"
            variant="light"
            color="blue"
            radius="sm"
            size="sm"
            scrollSpyOptions={{
              selector: '#mdx :is(h2, h3, h4, h5, h6)',
            }}
            getControlProps={({ data }) => ({
              onClick: () => data.getNode().scrollIntoView(),
              children: data.value,
            })}
          />
        </Collapse>
        <Divider />
      </NarrowContainer>
    </Box>
  );
}