import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';


const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <StyledView>
      <Text>Open up App.js to start working on your app!</Text>
    </StyledView>
  );
}
