import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {responsiveWidth} from '../../../utils/responsiveness';

/**
 * svg of Menu Tab Icon
 * @param props svg props
 * @returns React Component
 */
const MenuTabIcon = props => {
  return (
    <Svg
      width={responsiveWidth(25)}
      height={responsiveWidth(25)}
      viewBox="0 0 25 25"
      fill="none"
      {...props}>
      <Path
        d="M10.227 0h-9.09A1.136 1.136 0 000 1.136v9.091a1.136 1.136 0 001.136 1.137h9.091a1.136 1.136 0 001.137-1.137v-9.09A1.136 1.136 0 0010.227 0zM9.091 9.09H2.273V2.274H9.09V9.09zM23.864 0h-9.091a1.136 1.136 0 00-1.137 1.136v9.091a1.136 1.136 0 001.137 1.137h9.09A1.136 1.136 0 0025 10.227v-9.09A1.136 1.136 0 0023.864 0zm-1.137 9.09H15.91V2.274h6.818V9.09zm-12.5 4.546h-9.09A1.136 1.136 0 000 14.773v9.09A1.136 1.136 0 001.136 25h9.091a1.136 1.136 0 001.137-1.136v-9.091a1.136 1.136 0 00-1.137-1.137zm-1.136 9.091H2.273V15.91H9.09v6.818zm14.773-9.09h-9.091a1.136 1.136 0 00-1.137 1.136v9.09A1.136 1.136 0 0014.773 25h9.09A1.136 1.136 0 0025 23.864v-9.091a1.136 1.136 0 00-1.136-1.137zm-1.137 9.09H15.91V15.91h6.818v6.818z"
        fill={props.color || '#fff'}
      />
    </Svg>
  );
};

export default MenuTabIcon;
