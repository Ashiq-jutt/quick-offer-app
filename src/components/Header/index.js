import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Icon, Icons} from '..';
import Text from '../Text';
import {BaseColor} from '../../config/theme';
import {DummyProfileImage, HeaderLogoBlue} from '../../assets/images';
import {CartTabIcon} from '../../assets/svg';
import { IconApp, Logout } from '../../assets/svg/Category';

const Index = ({
  firstIcon = false,
  onPressFirstIcon,
  titleText = false,
  title = '',
  showLike = true,
  isLike,
  onPressLike,
  lastIcon = true,
  lastIconName = 'Cart',
  onPressLastIcon,
  onPressCart
}) => {
  return (
    <View
      style={{
        height: 50,
         
        alignItems: 'center',
        paddingHorizontal: 12,
        flexDirection: 'row',
        marginTop:10
      }}>
      <View
        style={{
          flexDirection: 'row',
          flex: 0.8,
          alignItems: 'center',
        }}>
        {firstIcon && (
          <TouchableOpacity onPress={onPressFirstIcon}>
            <Icon
              name={Icons.ARROW_BACK}
              type={'MaterialCommunity'}
              size={28}
              color={BaseColor.text}
            />
          </TouchableOpacity>
        )}

        {titleText ? (
          <View View style={{width: '100%'}}>
            <Text semibold title3 text textAlign={'center'}>
              {title}
            </Text>
          </View>
        ) : (
          <>
         
            <Image
              source={HeaderLogoBlue}
              style={{height: 22, width: 133, marginLeft: 10}}
            />
          </>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0.2,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          {showLike && (
            <TouchableOpacity onPress={onPressLike} activeOpacity={0.6}>
              <Icon
                name={isLike ? Icons.HEART_FILL : Icons.HEART_EMPTY}
                type={'ant'}
                size={22}
                color={BaseColor.blackColor}
              />
            </TouchableOpacity>
          )}
        </View>

        <View>
          {lastIcon && (
            <>
              {lastIconName === 'Cart' && (
                <TouchableOpacity onPress={onPressCart}>
                <CartTabIcon color={BaseColor.blackColor} />

                </TouchableOpacity>
                // <Image
                //   source={DummyProfileImage}
                //   style={{height: 35, width: 35}}
                // />
              )}
              {lastIconName === 'Share' && (
                <TouchableOpacity onPress={onPressLastIcon} activeOpacity={0.6}>
                  <Icon name={Icons.SHARE} size={22} color={BaseColor.text} />
                </TouchableOpacity>
              )}
              {lastIconName === 'Logout' && (
                <TouchableOpacity onPress={onPressLastIcon} activeOpacity={0.6}>
                  {/* <Icon
                    name={Icons.LOGOUT}
                    type={'ant'}
                    size={22}
                    color={BaseColor.text}
                  /> */}
                  <Logout/>
                </TouchableOpacity>
              )}
            </>
          )}
        </View>
      </View>
    </View>
  );
};
export default Index;
