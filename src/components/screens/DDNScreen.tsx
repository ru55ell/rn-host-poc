import React from 'react';
import { Stack, Text } from '../elements';

export const DDNScreen = (props: any) => {
  const { route, children, bgcolor, showTitle } = props;

  return (
    <Stack flex={1} bg={bgcolor} px={8} {...props}>
      {showTitle && (
        <Text
        >
          {route.name}
        </Text>
      )}
      {children}
    </Stack>
  );
};
