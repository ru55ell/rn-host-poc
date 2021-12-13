import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DDNDrawerMenu } from '../components';
import { theme } from '../theme';
import type { NavigationProviderType } from 'src/interfaces';

const NavigationContext = React.createContext<any>(null);

const NavigationProvider = ({ children, config }: NavigationProviderType) => {
  const [navConfig] = React.useState<any>(config);

  const BPMfeHostMenu = () => {
    return <DDNDrawerMenu {...navConfig} routes={navConfig?.routes} />;
  };

  return (
    <NavigationContext.Provider value={{ navConfig }}>
      <NavigationContainer theme={theme.navTheme}>
        {children}
      </NavigationContainer>
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
