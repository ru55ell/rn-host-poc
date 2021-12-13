import * as React from 'react';
import { BPMfeHost } from 'bp-mfe-host';
import Home from './Home'

const navConfig = {
  type: 'DRAWER_NAV',
  screenOptions: {},
  routes: [
    {
      name: 'Home',
      component: Home,
      options: {},
      showTitle: false,
    },
  ],
  initialRouteName: 'Home',
};

export default function App() {

  return (
    <BPMfeHost navConfig={navConfig} />
  );
}
