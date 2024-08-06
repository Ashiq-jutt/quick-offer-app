import React from 'react';
import {FontWeight, Typography} from '../../config/typography';
import {StyleSheet, Text} from 'react-native';
import {BaseColor} from '../../config/theme';

export default function Index(props) {
  const {
    //props style
    header,
    heading,
    title,
    title1,
    title2,
    title3,
    title4,
    small,
    headline,
    body1,
    body2,
    subhead,
    footnote,
    caption1,
    caption2,
    overline,
    // props font
    thin,
    ultraLight,
    light,
    regular,
    medium,
    semibold,
    bold,
    heavy,
    black,
    //custom color
    whiteColor,
    blackColor,
    primary,
    textGrey,
    text,
    iserror,
    backgroundWhite,
    //extra
    numberOfLines,
    textAlign,
    //custom
    style,
    //children
    children,
  } = props;

  // const { colors } = useTheme();
  // const font = useFont();

  let textStyle = StyleSheet.flatten([
    header && Typography.header,
    title && Typography.title,
    title1 && Typography.title1,
    title2 && Typography.title2,
    title3 && Typography.title3,
    title4 && Typography.title4,
    heading && Typography.heading,
    small && Typography.small,
    headline && Typography.headline,
    body1 && Typography.body1,
    body2 && Typography.body2,
    subhead && Typography.subhead,
    footnote && Typography.footnote,
    caption1 && Typography.caption1,
    caption2 && Typography.caption2,
    overline && Typography.overline,

    //custom for font
    thin && {fontWeight: FontWeight.thin},
    ultraLight && {fontWeight: FontWeight.ultraLight},
    light && {fontWeight: FontWeight.light},
    regular && {fontWeight: FontWeight.regular},
    medium && {fontWeight: FontWeight.medium},
    semibold && {fontWeight: FontWeight.semibold},
    bold && {fontWeight: FontWeight.bold},
    heavy && {fontWeight: FontWeight.heavy},
    black && {fontWeight: FontWeight.black},
    // default color
    {color: BaseColor.blackColor},
    //custom for color
    whiteColor && {color: BaseColor.whiteColor},
    blackColor && {color: BaseColor.blackColor},
    primary && {color: BaseColor.primary},
    textGrey && {color: BaseColor.textGrey},
    text && {color: BaseColor.text},
    iserror && {color: BaseColor.error},
    backgroundWhite && {color: BaseColor.backgroundWhite},

    //Lato Fonts
    // thin && {fontFamily: 'Poppins-Thin'},
    // light && {fontFamily: 'Poppins-Light'},
    // regular && {fontFamily: 'Poppins-Regular'},
    // bold && {fontFamily: 'Poppins-Bold'},
    // black && {fontFamily: 'Poppins-Black'},
    // ultraLight && {fontFamily: 'Poppins-ExtraLight'},
    // medium && {fontFamily: 'Poppins-Medium'},
    // heavy && {fontFamily: 'Poppins-ExtraBold'},
    // semibold && {fontFamily: 'Poppins-SemiBold'},
    {
      textAlign,
    },
    
    // {fontFamily: 'Poppins-Bold'},
    // !thin &&
    //   !light &&
    //   !regular &&
    //   !bold &&
    //   !black &&
    //   !ultraLight &&
    //   !medium &&
    //   !heavy &&
    //   !semibold && {fontFamily: 'Poppins-Regular'},

    style && style,
  ]);
  return (
    <Text style={textStyle} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}
