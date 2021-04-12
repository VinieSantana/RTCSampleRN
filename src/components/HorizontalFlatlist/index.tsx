import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './styles';

type Props = {
  elements: Array<Element>;
};

const HorizontalFlatlist: React.FC<Props> = ({elements}: Props) => {
  const renderElement: React.ElementType = ({item}) => item;
  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={elements}
        keyExtractor={(_, index) => `listElement${index}`}
        renderItem={renderElement}
        horizontal
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default HorizontalFlatlist;
