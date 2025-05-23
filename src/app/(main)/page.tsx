
import Link from 'next/link';
import { 
  IconArrowUpRight,
  IconMail,
} from '@tabler/icons-react';
import {
  Button,
  Group,
  Text,
  Stack,
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
} from '@mantine/core';
import { Anchor } from '@/components/Anchor';
import { Card } from '@/components/Card';
import { H2 } from '@/components/Headings';
import { Paragraph } from '@/components/Paragraph';

export default function Home() {
  return (
    <>
      <H2>
        Who am I?
      </H2>
      <Group wrap="nowrap" gap="md" align="start">
        <Paragraph>
          I'm a graduate student in the <Anchor href="https://cse.postech.ac.kr/">Department of Computer Science and Engineering</Anchor> at <Anchor href="https://postech.ac.kr/">POSTECH</Anchor>. Currently, I'm conducting research in the <Anchor href="https://ml.postech.ac.kr/">Machine Learning Laboratory</Anchor>, advised by Prof. <Anchor href="https://sites.google.com/view/jungseulok">Jungseul Ok</Anchor>.
        </Paragraph>
      </Group>
      <Stack gap="5px">
        <Group gap="1ex">
          <IconMail size={17} />
          <Text>
            minhyeon.oh@postech.ac.kr
          </Text>
        </Group>
        <Group gap="1ex">
          <IconArrowUpRight size={17} />
          <Anchor
            c="var(--mantine-color-text)"
            href="https://github.com/minhyeonoh"
            target="_blank"
          >
            GithHub
          </Anchor>
        </Group>
        <Group gap="1ex">
          <IconArrowUpRight size={17} />
          <Anchor
            c="var(--mantine-color-text)"
            href="https://scholar.google.com/citations?hl=ko&user=btj5roEAAAAJ"
            target="_blank"
          >
            Google Scholar
          </Anchor>
        </Group>
        <Group gap="1ex">
          <IconArrowUpRight size={17} />
          <Anchor
            c="var(--mantine-color-text)"
            href="http://www.linkedin.com/in/minhyeon-oh-36b3282a2"
            target="_blank"
          >
            LinkedIn
          </Anchor>
        </Group>
      </Stack>
      <H2 sub="My vision at a glance">
        Beyond powerful, towards personalized AI
      </H2>
      <Paragraph>
        My research vision centers on evolving AI beyond raw power towards truly <strong>human-centric systems</strong>—AI that is deeply tailored to individual needs, preferences, and contexts. Achieving this requires a seamless synergy among intuitive human interaction, intelligent AI capabilities, and effective personalization.
      </Paragraph>
      <Tabs
        color="dimmed"
        defaultValue="human"
        styles={{
          tab: {
            fontWeight: 700,
            paddingLeft: "var(--mantine-spacing-md)",
            paddingRight: "var(--mantine-spacing-md)",
            paddingTop: "var(--mantine-spacing-xs)",
            paddingBottom: "var(--mantine-spacing-xs)",
          },
          panel: {
            paddingTop: "var(--mantine-spacing-md)"
          }
        }}
      >
        <Group justify='space-between'>
          <TabsList>
            <TabsTab value="human">Human</TabsTab>
            <TabsTab value="ai">AI</TabsTab>
            <TabsTab value="personalization">Personalization</TabsTab>
          </TabsList>
          <Button color="dimmed" size="compact-sm" radius="md" variant="outline">
            <Group gap="1ex">
              <IconArrowUpRight size={13} />
              <Link 
                href="/research" 
                style={{
                  textDecoration: "none",
                  color: "var(--mantine-color-text)"
                }}
              >
                Read more
              </Link>
            </Group>
          </Button>
        </Group>
        <TabsPanel value="human">
          <Card padding="sm" radius="md">
            <Stack gap="1ex">
              <Text size="sm" fw={700}>
                Providing feedback with minimal efforts
              </Text>
              <Text size="sm">
                We design interactions that empower users to effortlessly convey their preferences. Our focus is on capturing nuanced, multi-dimensional, and often implicit user needs and contexts through intuitive and low-effort feedback mechanisms.
              </Text>
            </Stack>
          </Card>
        </TabsPanel>
        <TabsPanel value="ai">
          <Card padding="sm" radius="md">
            <Stack gap="1ex">
              <Text size="sm" fw={700}>
                Understanding preferences from user feedback
              </Text>
              <Text size="sm">
                Our AI is engineered to process this feedback, deeply understanding complex user preferences and dynamic contexts. It learns adaptively and contextually, recognizing subtle shifts in user needs and adapting its comprehension accordingly across various situations.
              </Text>
            </Stack>
          </Card>
        </TabsPanel>
        <TabsPanel value="personalization">
          <Card padding="sm" radius="md">
            <Stack gap="1ex">
              <Text size="sm" fw={700}>
                Adapting and delivering tailored experiences
              </Text>
              <Text size="sm">
                Ultimately, our vision culminates in truly human-centered AI. We achieve this by dynamically adapting outputs to deliver experiences precisely tailored to individual needs and contexts, enhanced by interpretable personalization parameters for direct user control.
              </Text>
            </Stack>
          </Card>
        </TabsPanel>
      </Tabs>
    </>
  );
}