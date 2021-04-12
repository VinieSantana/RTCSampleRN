import React from "react";
import {
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  I18nManager,
} from "react-native";

import pencil from "./pencil.png";
import TextView from "./src/components/TextView";
import IconView from "./src/components/IconView";
import HorizontalFlatlist from "./src/components/HorizontalFlatlist";
import FlexRow from "./src/components/FlexRow";

const renderText = (text: string) => <TextView>{text}</TextView>;
const renderIcon = (icon: ImageSourcePropType) => (
  <IconView source={icon} height={100} width={100} />
);

const wrapperContent = [
  renderIcon(pencil),
  renderText("اختبار نص RTL"),
  renderText("No RTL Text"),
];

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Text</Text>
          {wrapperContent[1]}
          {wrapperContent[2]}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Image</Text>
          {wrapperContent[0]}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>FlatList</Text>
          <HorizontalFlatlist elements={wrapperContent} />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Flex Row</Text>
          <FlexRow>{wrapperContent}</FlexRow>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
});

export default App;
