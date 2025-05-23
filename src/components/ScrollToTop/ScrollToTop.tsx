
'use client';

import { IconChevronsUp } from '@tabler/icons-react';
import {
  Affix,
  Transition,
  UnstyledButton,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

export function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Affix position={{ bottom: "xl", right: "xl" }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <UnstyledButton
            w="1cm"
            h="1cm"
            // bd="1px solid"
            style={{
              ...transitionStyles, 
              // width: "1cm", 
              // height: "1cm",
              // border: "1px solid",
              borderRadius: "var(--mantine-radius-xl)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--mantine-color-body)",
              boxShadow: "var(--mantine-shadow-md)" //"0px 0px 5px var(--mantine-color-text)"
            }}
            onClick={() => scrollTo({ y: 0 })}
          >
            <IconChevronsUp size={20} />
          </UnstyledButton>
        )}
      </Transition>
    </Affix>
  );
}