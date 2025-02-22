import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

const TextView: React.FC = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default TextView;
