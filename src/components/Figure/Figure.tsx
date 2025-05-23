
import { Image, Space, Text } from "@mantine/core";


interface FigureProps extends React.ComponentPropsWithoutRef<typeof Image> {
  caption?: any;
}


export function Figure({ caption, ...props }: FigureProps) {
  return (
    <figure style={{margin: "0px"}}>
      <Image radius="md" {...props} />
      {caption &&
        <figcaption>
          <Space h="1ex" />
          <Text size="sm">
            {caption}
          </Text>
        </figcaption>
      }
    </figure>
  );
}