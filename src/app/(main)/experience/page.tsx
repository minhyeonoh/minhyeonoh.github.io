
import {
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { H2 } from '@/components/Headings';
import { Paragraph } from '@/components/Paragraph';


export default function Page() {
  return (
    <div>
    <H2>Education</H2>
    <Paragraph>
      ...
    </Paragraph>
    <H2>Teaching assistant</H2>
      <Stack gap="sm">
        <Group>
          <Text>
            Introduction to Artificial Intelligence (CSED105)
          </Text>
        </Group>
        <Group>
          <Text>
            Operating Systems (CSED312)
          </Text>
        </Group>
        <Group>
          <Text>
            Operating Systems (CSED312)
          </Text>
        </Group>
        <Group>
          <Text>
            Samsung Heavy Industries
          </Text>
        </Group>
        <Group>
          <Text>
            Samsung Heavy Industries
          </Text>
        </Group>
      </Stack>
    </div>
  )
}