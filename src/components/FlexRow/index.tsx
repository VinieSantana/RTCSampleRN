import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const FlexRow: React.FC = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default FlexRow;
