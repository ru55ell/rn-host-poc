import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';

export const MFEDrawerItems = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
