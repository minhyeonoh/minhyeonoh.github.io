
import { Box } from "@mantine/core";

export function FullWidthBox({ children, ...props }) {
  return (
    <Box mb="md" px="md" w="100dvw" ml="calc(-50dvw + 50%)" {...props}>
      {children}
    </Box>
  );
}