import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Center } from './components/elements';
import { theme } from './theme';
import NavigationProvider from './providers/NavigationProvider';
import type { BPMfeHostType } from './interfaces';

export default ({ children, navConfig }: BPMfeHostType ) => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationProvider config={navConfig}>
        <Center bg="primary.500" flex={1}>
          {children}
        </Center>
      </NavigationProvider>
    </ThemeProvider>
  );
};
