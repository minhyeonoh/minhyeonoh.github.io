
import { Anchor as _Anchor } from "@mantine/core";

export function Anchor({ children, ...props }) {
  return (
    <_Anchor underline="always" {...props}>
      {children}
    </_Anchor>
  );
}

