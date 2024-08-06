import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {responsiveWidth} from '../../../utils/responsiveness';

/**
 * svg of Profile Tab Icon
 * @param props svg props
 * @returns React Component
 */
const ProfileTabIcon = props => {
  return (
    <Svg
      width={responsiveWidth(22)}
      height={responsiveWidth(25)}
      viewBox="0 0 22 25"
      fill="none"
      {...props}>
      <Path
        d="M15.25 14.732c-1.361 0-2.016.76-4.25.76s-2.884-.76-4.25-.76a6.377 6.377 0 00-6.375 6.375v1.214a2.277 2.277 0 002.277 2.277h16.696a2.277 2.277 0 002.277-2.277v-1.214a6.377 6.377 0 00-6.375-6.375zm4.098 7.59H2.652v-1.215A4.105 4.105 0 016.75 17.01c.693 0 1.817.759 4.25.759 2.452 0 3.553-.76 4.25-.76a4.105 4.105 0 014.098 4.1v1.213zM11 13.972c3.77 0 6.83-3.06 6.83-6.83 0-3.771-3.06-6.83-6.83-6.83s-6.83 3.059-6.83 6.83c0 3.77 3.06 6.83 6.83 6.83zM11 2.59a4.56 4.56 0 014.554 4.554A4.56 4.56 0 0111 11.696a4.56 4.56 0 01-4.554-4.553A4.56 4.56 0 0111 2.589z"
        fill={props.color || '#fff'}
      />
    </Svg>
  );
};

export default ProfileTabIcon;
