import {StyleSheet} from 'react-native';
import {BaseColor} from '../../config/theme';

export const styles = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  mainView: {
    height: 18,
    width: 18,
    backgroundColor: BaseColor.whiteColor,
    borderRadius: 10,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
});
