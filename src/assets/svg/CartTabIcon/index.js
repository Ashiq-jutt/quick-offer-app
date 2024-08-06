import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {responsiveWidth} from '../../../utils/responsiveness';

/**
 * svg of Cart Tab Icon
 * @param props svg props
 * @returns React Component
 */
const CartTabIcon = props => {
  return (
    <Svg
      width={responsiveWidth(34)}
      height={responsiveWidth(34)}
      viewBox="0 0 34 34"
      fill="none"
      {...props}>
      <Path
        d="M28.687 8.146h-18.05l-.386-1.975a1.063 1.063 0 00-1.043-.859H4.781a.531.531 0 00-.531.532v1.062c0 .294.238.532.531.532h3.553l3.08 15.747a2.833 2.833 0 104.497.544h6.427a2.833 2.833 0 104.416-.626l.046-.21a1.063 1.063 0 00-1.038-1.289H13.27l-.416-2.125h13.83c.5 0 .932-.348 1.039-.837l2.001-9.208a1.062 1.062 0 00-1.038-1.288zM13.458 26.208a1.064 1.064 0 010-2.125 1.064 1.064 0 010 2.125zm11.334 0a1.064 1.064 0 010-2.125 1.064 1.064 0 010 2.125zm1.037-8.854H12.44l-1.386-7.083H27.37l-1.54 7.083z"
        fill={props.color || '#fff'}
      />
    </Svg>
  );
};

export default CartTabIcon;
