import React, { useRef, useState } from 'react';
import { ToastAndroid } from 'react-native';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import Bar from './Bar';
import IconButton from './IconButton';

const View = styled.View`
  height: 100%;
  display: flex;
  margin-top: ${Constants.statusBarHeight}px;
`;

export default function App() {
  if (Constants.platform === 'android') ToastAndroid.show('Welcome !', ToastAndroid.LONG);
  const webViewRef = useRef();
  const goBack = () => {
    if (webViewRef && webViewRef.current) webViewRef.current.goBack();
  };
  const reload = () => {
    if (webViewRef && webViewRef.current) webViewRef.current.reload();
  };
  return (
    <View>
      <WebView
        source={{ uri: 'https://seiska.fi' }}
        ref={(ref) => { webViewRef.current = ref; }}
      />
      <Bar>
        <IconButton color="red" icon="md-return-left" onPress={goBack} />
        <IconButton color="red" icon="md-refresh" onPress={reload} />
      </Bar>
    </View>
  );
}
