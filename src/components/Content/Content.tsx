import { NarrowContainer } from "@/components/NarrowContainer";

export function Content({ children }) {
  return (
    <NarrowContainer mb={100}>
      {children}
    </NarrowContainer>
  );
}