
import Link from "next/link";
import {
  Group,
  Stack,
  Text,
} from "@mantine/core";

interface LinkProps {
  home?: any;
  paper?: any;
  code?: any;
  dataset?: any;
}

interface PubProps {
  title: any;
  authors: any;
  venue: any;
  links?: LinkProps
}

export function Publication({ title, authors, venue, links } : PubProps) {
  return (
    <Stack gap="0px">
      <Text fw={700}>{title}</Text>
          <Text>{authors}</Text>
          <Text>{venue}</Text>
        {links &&
          <Group gap="1ex">
            {links.home && 
              <Link 
                href={links.home} 
                target="_blank"
                style={{
                  textDecoration: "none"
                }}
              >
                <Text c="blue">Home</Text>
              </Link>
            }
            {links.paper && 
              <Link 
                href={links.paper} 
                target="_blank"
                style={{
                  textDecoration: "none"
                }}
              >
                <Text c="blue">Paper</Text>
              </Link>
            }
            {links.code && 
              <Link 
                href={links.code} 
                target="_blank"
                style={{
                  textDecoration: "none"
                }}
              >
                <Text c="blue">Code</Text>
              </Link>
            }
            {links.dataset && 
              <Link 
                href={links.dataset} 
                target="_blank"
                style={{
                  textDecoration: "none"
                }}
              >
                <Text c="blue">Dataset</Text>
              </Link>
            }
          </Group>
        }
    </Stack>
  );
}