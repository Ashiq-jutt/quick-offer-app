import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {tv} from '../../assets/images';
import {Button, Header, Icon, ProductDetailModal} from '../../components';
import Text from '../../components/Text';
import {BaseColor} from '../../config/theme';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
// import Carousel from 'react-native-banner-carousel';
import {DotBlue, DotEmpty, PlusUse} from '../../assets/svg/Category';
import {GeneralResponses} from '../../services/responses';
import {API, useFetchGet} from '../../services';
import {IMAGE_BASE_URL} from '../../services/ROUTES';
import Slider from '../../components/slider/Slider';

const Index = ({navigation, route}) => {
  const carouselRef = useRef(null);
  const id = route?.params?.item;
  const [goForProductDetailApiCall, setGoForProductDetailApiCall] =
    useState(true);
  const [productDetail, setProductDetail] = useState(null);
  const [images, setImages] = useState(null);
  const [productDetailModal, setProductDetailModal] = useState(true);
  const product = useFetchGet(API.PRODUCT_DETAIL, goForProductDetailApiCall, {
    id: id?.id,
  });

  useEffect(() => {
    if (!product.loading) {
      if (product.response?.status === GeneralResponses.STATUS_OK.CODE) {
        onSelectCategoryApiSuccess(product.response?.data);
      }
    } else {
      console.log('error occurred in product detail api call');
    }
    setGoForProductDetailApiCall(false);
  }, [product.loading]);

  const onSelectCategoryApiSuccess = data => {
    setImages(data?.images);
    setProductDetail(data);
  };

  const functionsData = [
    {
      icon: 'truck',
      iconType: 'FontAwesome',
      text1: `Free delivery by Nov 27 - Nov 28`,
      text2: `Express delivery by Nov 27 - Nov 28 from $30.00`,
    },
    {
      icon: 'verified-user',
      iconType: 'MaterialCommunity',
      text1: `Free 30-day return`,
      text2: `1-year warranty`,
    },
    {
      icon: 'unlock-alt',
      iconType: 'FontAwesome',
      text1: `Works with all carriers`,
    },
    {
      icon: 'precision-manufacturing',
      iconType: 'MaterialCommunity',
      text1: `Verified refurbished in the US`,
    },
  ];

  const CustomizeModal = () => {
    setProductDetailModal(true);
  };

  const renderImage = (image, index) => {
    return (
      <View style={styles.slider}>
        <Image
          source={{uri: `${IMAGE_BASE_URL}${image?.item?.image}`}}
          style={styles.tv}
        />
        {/* <Image source={tv} style={styles.tv} /> */}
      </View>
    );
  };

  return (
    <>
      <ProductDetailModal
        data={productDetail}
        visible={productDetailModal}
        navigation={navigation}
        onSwipeComplete={() => setProductDetailModal(false)}
        onBackdropPress
      />
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={BaseColor.whiteColor}
        translucent={false}
      />
      <SafeAreaView style={styles.content}>
        <Header
          firstIcon={'Back'}
          onPressFirstIcon={() => navigation.goBack()}
          titleText
          title={''}
          showLike
          isLike={false}
          onPressLike={() => null}
          lastIcon={true}
          lastIconName={'Share'}
          onPressLastIcon={() => null}
        />

        {/* <Carousel
          ref={carouselRef}
          data={images}
          renderItem={renderImage}
          sliderWidth={300}
          itemWidth={200}
        /> */}
        <Slider images={images} interval={5000} />
        <ScrollView>
          <View style={{paddingHorizontal: 16}}>
            <Text overline regular>
              {productDetail?.product?.slug}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.7}}>
                <Text title2 medium>
                  {productDetail?.product?.name}
                </Text>
              </View>
              <View style={{flex: 0.3, alignItems: 'flex-end'}}>
                <Text title3 bold>
                  {'$' + productDetail?.product?.lowest_price}
                </Text>
              </View>
            </View>
            <View style={{flex: 0.3, alignItems: 'flex-end'}}>
              <Text body2 bold textStyle={{textDecoration: 'line-through'}}>
                {'$' + productDetail?.product?.price}
              </Text>
            </View>
            <View>
              {functionsData.map((item, index) => {
                return (
                  <View
                    key={`'${index}'`}
                    style={{flexDirection: 'row', marginBottom: 20}}>
                    <View
                      style={{
                        height: 50,
                        width: 50,
                        backgroundColor: BaseColor.secondary2,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 20,
                      }}>
                      <Icon
                        name={item.icon}
                        size={20}
                        type={item.iconType}
                        color={'gray'}
                      />
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Text body2 bold>
                        {item.text1}
                      </Text>
                      {item.text2 && (
                        <Text footnote medium>
                          {item.text2}
                        </Text>
                      )}
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{alignItems: 'center', width: '100%'}}>
            <TouchableOpacity style={styles.btndevice}>
              <Icon
                name={'truck'}
                size={20}
                type={'FontAwesome'}
                color={'white'}
                style={{
                  marginHorizontal: 8,
                  borderRadius: 20,
                  borderWidth: 1,
                  alignItems: 'center',
                  padding: 10,
                  backgroundColor: 'black',
                }}
              />
              <Text>{'Do you have a device to trade in?'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sheet}>
            <TouchableOpacity style={styles.overView}>
              <Text>Overview</Text>
              <PlusUse />
            </TouchableOpacity>
            <TouchableOpacity style={styles.overView}>
              <Text>Overview</Text>
              <PlusUse />
            </TouchableOpacity>
            <TouchableOpacity style={styles.overView}>
              <Text>Technical Specifications</Text>
              <PlusUse />
            </TouchableOpacity>
            <TouchableOpacity style={styles.overView}>
              <Text>Customer Reviews</Text>
              <PlusUse />
            </TouchableOpacity>
            <Button
              style={styles.btn}
              text={'Customize this model'}
              onPress={CustomizeModal}></Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
