import React from 'react';
import { Button } from 'react-native';

export const MFESubmitBtn = (props: any) => {
  const { children } = props;

  return (
    <Button variant="submit" {...props} isLoadingText="LOADING">
      {children}
    </Button>
  );
};
