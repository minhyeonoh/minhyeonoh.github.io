
import Link from 'next/link';
import { 
  IconArrowRight,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconSchool,
} from '@tabler/icons-react';
import {
  Button,
  Card,
  Group,
  Text,
  Stack,
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
  List,
  ListItem
} from '@mantine/core';
import { Anchor } from '@/components/Anchor';
import { H2 } from '@/components/Headings';
import { Paragraph } from '@/components/Paragraph';

import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
} from '@/components/Accordion';
import { Carousel, CarouselSlide } from '@/components/Carousel';
import { List as A, ListItem as B } from '@/components/List';
import { Figure } from '@/components/Figure';

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
      <List 
        spacing="0.5ex" 
        mt="0.5ex"
        center
      >
        <ListItem icon={<IconMail />}>minhyeon.oh@postech.ac.kr</ListItem>
        <ListItem icon={<IconSchool />}>awas</ListItem>
        <ListItem icon={<IconBrandGithub />}>a</ListItem>
        <ListItem icon={<IconBrandLinkedin />}>a</ListItem>
      </List>
      <H2 sub="My vision at a glance">
        Beyond powerful, towards personalized AI
      </H2>
      <Paragraph>
        Our research vision centers on evolving AI beyond raw power towards truly human-centric systems—AI that is deeply tailored to individual needs, preferences, and contexts. This ambitious goal requires a cohesive synergy between intelligent AI capabilities, effective human interaction, and nuanced personalization.
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
              <IconArrowRight size={13} />
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
          <Card shadow="sm" padding="sm" radius="md">
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
          <Card shadow="sm" padding="sm" radius="md">
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
          <Card shadow="sm" padding="sm" radius="md">
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