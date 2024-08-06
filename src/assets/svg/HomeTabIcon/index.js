import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {responsiveWidth} from '../../../utils/responsiveness';

/**
 * svg of Home Tab Icon
 * @param props svg props
 * @returns React Component
 */
const HomeTabIcon = props => {
  return (
    <Svg
      width={responsiveWidth(26)}
      height={responsiveWidth(23)}
      viewBox="0 0 26 23"
      fill="none"
      {...props}>
      <Path
        d="M22.208 22.98H16.54a.708.708 0 01-.708-.709v-5.667a.708.708 0 00-.709-.708h-4.25a.708.708 0 00-.708.708v5.667a.709.709 0 01-.708.708H3.79a.708.708 0 01-.708-.708v-8.19c.078-.054.17-.084.242-.148l9.674-8.53 9.684 8.54c.068.062.158.09.233.142v8.186a.709.709 0 01-.708.708z"
        fill={props.color || '#fff'}
      />
      <Path
        d="M23.621 12.88L13.47 3.925a.708.708 0 00-.937 0L2.38 12.881a.708.708 0 01-1-.054L.43 11.774a.708.708 0 01.054-1L11.818.769a1.764 1.764 0 012.367 0l4.481 3.956V2.438a.708.708 0 01.709-.709h2.833a.708.708 0 01.708.709v6.04l2.599 2.294a.709.709 0 01.054 1l-.948 1.055a.708.708 0 01-1 .053z"
        fill={props.color || '#fff'}
      />
    </Svg>
  );
};

export default HomeTabIcon;
