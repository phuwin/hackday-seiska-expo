import React from 'react';
import styledN from 'styled-components/native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import colors from './colors';

const TouchableOpacity = styledN.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.red};
`;


const Button = ({ icon, color, onPress }) => (
  <TouchableOpacity color={color} onPress={onPress}>
    <Ionicons name={icon} size={20} color="white" />
  </TouchableOpacity>
);

Button.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  icon: '',
  color: colors.red,
  onPress: null,
};

export default Button;
