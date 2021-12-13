import React from 'react';
import { Button } from 'react-native';

export const MFEOutlineBtn = (props: any) => {
  const { children, ...rest } = props;

  return (
    <Button variant="outline" {...rest} isLoadingText="LOADING">
      {children}
    </Button>
  );
};
