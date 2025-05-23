import { Container } from "@mantine/core";


export function NarrowContainer({ children, ...props }) {
  return (
    <Container size="70ch" px="md"{...props}>
      {children}
    </Container>
  );
}