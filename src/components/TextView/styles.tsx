import {StyleSheet} from 'react-native';
import {isRTL} from '../../utils/LocaleUtils';

export const styles = StyleSheet.create({
  text: {
    flex: 1,
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },
});
