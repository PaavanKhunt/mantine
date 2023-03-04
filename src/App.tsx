import { MantineProvider, Text } from '@mantine/core';
import React from 'react';
import { Demo } from './components/Demo';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
      <Demo />
    </MantineProvider>
  );
}

export default App;
