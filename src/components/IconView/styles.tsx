import {StyleSheet, I18nManager} from 'react-native';
import {isRTL} from '../../utils/LocaleUtils';

export const styles = StyleSheet.create({
  image: {
    transform: [{scaleX: isRTL ? -1 : 1}],
  },
});
