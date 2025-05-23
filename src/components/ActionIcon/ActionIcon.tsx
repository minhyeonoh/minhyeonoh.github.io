
import { ActionIcon as Button } from "@mantine/core";

export function ActionIcon({ children, ...props }) {
  return (
    <Button
      size="md"
      radius="md"
      variant='subtle' 
      color="var(--mantine-color-text)"
      {...props}
    >
      {children}
    </Button>
  );
}