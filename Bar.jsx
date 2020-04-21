import React from 'react';
import styledN from 'styled-components/native';
import PropTypes from 'prop-types';
import Constants from 'expo-constants';
import colors from './colors';

const View = styledN.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.yellow};
  padding: 5px 15px;
  margin-bottom: ${Constants.statusBarHeight}px;
`;

const Bar = ({ children }) => (
  <View>
    {children}
  </View>
);

Bar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Bar;
