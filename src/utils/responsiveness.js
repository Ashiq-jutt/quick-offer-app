/**
 * calculate and get responsive sizes based on figma design.
 */

import { Dimensions, Platform } from 'react-native';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const viewportWidth = Platform.OS === 'web' ? 1440 : 360;
const viewportHeight = 800;

/**
 * calculate responsive width.
 * @param size - width on figma
 */
export const responsiveWidth = (size) => {
  return size * (deviceWidth / viewportWidth);
};

/**
 * calculate responsive height.
 * @param size - height on figma
 */
export const responsiveHeight = (size) => {
  return Platform.OS === 'web' ? size : size * (deviceHeight / viewportHeight);
};

/**
 * calculate responsive font size.
 * @param size - font size on figma
 */
export const responsiveFont = (size) => {
  return size * (deviceWidth / viewportWidth);
};

export const MOBILE_S = 320;
export const MOBILE_M = 375;
export const MOBILE_L = 425;
export const TABLET = 768;
export const LAPTOP = 1024;
