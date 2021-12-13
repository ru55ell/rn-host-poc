import React from 'react';
import { DDNScreen, DDNSubmitBtn, DDNOutlineBtn } from 'bp-mfe-host';

const Home = (props: any) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <DDNScreen {...props} bgcolor="white" showTitle={true} space={4}>
      <DDNSubmitBtn onPress={() => setLoading((prev) => !prev)} size="xl" isLoading={loading}>
        LOGIN
      </DDNSubmitBtn>
      <DDNOutlineBtn onPress={() => setLoading((prev) => !prev)} size="xl" isLoading={loading}>
        LOGIN
      </DDNOutlineBtn>
    </DDNScreen>
  );
};

export default Home;
