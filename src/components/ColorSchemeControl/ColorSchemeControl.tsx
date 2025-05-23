
import cx from 'clsx';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { 
  useMantineColorScheme, 
  useComputedColorScheme, 
  Tooltip, 
  UnstyledButton 
} from '@mantine/core';
import classes from './ColorSchemeControl.module.css';

export function ColorSchemeControl() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const isDarkMode = (computedColorScheme == 'dark')

  return (
    <Tooltip
      label={`Read in ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <UnstyledButton
        onClick={() => setColorScheme(isDarkMode ? 'light' : 'dark')}
      >
        <IconSun className={
          cx(classes.icon, classes.light)}
        />
        <IconMoon className={
          cx(classes.icon, classes.dark)}
        />
      </UnstyledButton>
    </Tooltip>
  );
}