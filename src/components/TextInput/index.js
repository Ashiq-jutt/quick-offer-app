/**
 * this file contains Text input costomized component
 */
import React from 'react';
import {TextInput, View, I18nManager, StyleSheet} from 'react-native';
import {BaseStyle} from '../../config/baseStyles';
import {BaseColor} from '../../config/theme';
import Text from '../Text';

/**
 * this method will return textInput component
 * @param param0 params for textInput component
 * @returns React Element
 */
const Index = React.forwardRef((props, ref) => {
  const {
    title,
    style = {},
    onChangeText = text => {},
    onFocus = () => {},
    placeholder = '',
    value = '',
    secureTextEntry = false,
    keyboardType = 'default',
    multiline = false,
    textAlignVertical = 'center',
    icon = null,
    onSubmitEditing = () => {},
    inputStyle = {},
    testID = '',
    maxLength = undefined,
    caretHidden = false,
    autoFocus = false,
    autoCapitalize = undefined,
    returnKeyType = 'default',
    editable = true,
    textContentType = 'none',
    onEndEditing = () => {},
    numberOfLines = undefined,
    backgroundColor,
    ...rest
  } = props;

  return (
    <View
      style={[
        BaseStyle.textInput,
        style,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : BaseColor.whiteColor,
        },
        icon && {
          alignItems: 'center',
          flexDirection: 'row',
        },
      ]}>
      {title && (
        <Text textGrey regular caption2>
          {title}
        </Text>
      )}
      <TextInput
        editable={editable}
        ref={ref}
        testID={testID}
        style={StyleSheet.flatten([
          {
            flex: 1,
            height: '100%',
            textAlign: I18nManager.isRTL ? 'right' : 'auto',
            color: BaseColor.blackColor,
            fontSize: 14,
            fontFamily: 'Poppins-Regular',
          },
          inputStyle,
        ])}
        onChangeText={text => onChangeText(text)}
        onFocus={() => onFocus()}
        maxLength={maxLength}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={BaseColor.textGrey}
        caretHidden={caretHidden}
        secureTextEntry={secureTextEntry}
        value={value}
        keyboardType={keyboardType}
        multiline={multiline}
        autoFocus={autoFocus}
        textAlignVertical={textAlignVertical}
        onSubmitEditing={onSubmitEditing}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        textContentType={textContentType}
        onEndEditing={onEndEditing}
        keyboardAppearance={'default'}
        numberOfLines={numberOfLines}
        {...rest}
      />
      {icon}
    </View>
  );
});
export default Index;
