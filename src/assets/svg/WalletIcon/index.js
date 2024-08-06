import * as React from 'react';
import Svg, {Path, Mask, G} from 'react-native-svg';

import {responsiveWidth} from '../../../utils/responsiveness';

/**
 * svg of Wallet Icon for sidebar
 * @param props svg props
 * @returns React Component
 */
const WalletIcon = props => {
  return (
    <Svg
      width={responsiveWidth(30)}
      height={responsiveWidth(30)}
      viewBox="0 0 30 30"
      fill="none"
      {...props}>
      <Path fill="red" fillOpacity={0.01} d="M0 0H30V30H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8a4 4 0 014-4h11.8a4 4 0 014 4v.38c1.105 0 2.2 1.102 2.2 2.19v13.46c0 1.088-.895 1.97-2 1.97H7c-1.657 0-3-1.323-3-2.955V8zm16 9.04c0 1.1.895 1.992 2 1.992s2-.891 2-1.991-.895-1.991-2-1.991-2 .89-2 1.99zM7.7 6.19a1.5 1.5 0 00-1.5 1.5v.69h15.4v-.69a1.5 1.5 0 00-1.5-1.5H7.7z"
        fill="#000"
      />
      <Mask
        id="a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={4}
        width={22}
        height={22}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 8a4 4 0 014-4h11.8a4 4 0 014 4v.38c1.105 0 2.2 1.102 2.2 2.19v13.46c0 1.088-.895 1.97-2 1.97H7c-1.657 0-3-1.323-3-2.955V8zm16 9.04c0 1.1.895 1.992 2 1.992s2-.891 2-1.991-.895-1.991-2-1.991-2 .89-2 1.99zM7.7 6.19a1.5 1.5 0 00-1.5 1.5v.69h15.4v-.69a1.5 1.5 0 00-1.5-1.5H7.7z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path fill={props.color || '#C1C0C9'} d="M0 0H30V30H0z" />
      </G>
    </Svg>
  );
};

export default WalletIcon;
