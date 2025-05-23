
import cx from 'clsx';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { 
  useMantineColorScheme, 
  useComputedColorScheme, 
  Tooltip, 
} from '@mantine/core';
import { ActionIcon } from '@/components/ActionIcon';
import classes from './ColorSchemeControl.module.css';

export function ColorSchemeControl() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const isDarkMode = (computedColorScheme == 'dark')

  return (
    <Tooltip
      label={`${isDarkMode ? 'Light' : 'Dark'} mode`}
      withArrow
    >
      <ActionIcon 
        onClick={() => 
          setColorScheme(isDarkMode ? 'light' : 'dark')
        }
      >
        <IconSun className={
          cx(classes.icon, classes.light)}
        />
        <IconMoon className={
          cx(classes.icon, classes.dark)}
        />
      </ActionIcon>
    </Tooltip>
  );
}