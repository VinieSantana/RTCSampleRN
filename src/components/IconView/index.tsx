import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {styles} from './styles';

type Props = {
  source: ImageSourcePropType;
  height?: number;
  width?: number;
};

const IconView: React.FC<Props> = ({source, height, width}: Props) => {
  return <Image source={source} style={[styles.image, {height , width}]} />;
};

export default IconView;
