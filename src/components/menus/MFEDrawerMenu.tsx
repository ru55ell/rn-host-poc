import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const MFEDrawerMenu = (props: any) => {
  const { routes, screenOptions, initialRouteName } = props;

  const renderDrawerScreen = (item: any, index: Number) => {

    return (
      <Drawer.Screen
        key={`${item.name}-${index}`}
        name={item.name}
        component={item.component}
        options={item.options}
      />
    );
  };

  return (
    <Drawer.Navigator initialRouteName={initialRouteName} screenOptions={screenOptions}>
      {routes?.map((item: any, index: Number) => renderDrawerScreen(item, index))}
    </Drawer.Navigator>
  );
};
