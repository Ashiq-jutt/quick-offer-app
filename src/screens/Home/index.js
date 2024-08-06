import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {
  BestSellingItem,
  Header,
  HomeTitlesCard,
  LatestProductItem,
  PopularCategory,
  SearchBar,
  Seperator,
  SliderItem,
} from '../../components';
import {BestSelling1, Latest1, SliderImage1} from '../../assets/images';
import {BaseColor} from '../../config/theme';
import {CART, HOME, MAIN} from '../../navigation/routes';
import {API, useFetchGet} from '../../services';
import {GeneralResponses} from '../../services/responses';
import Text from '../../components/Text/index';
import { MobileMain } from '../../assets/svg/Category';
const Index = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [goForHomeApiCall, setGoForHomeApiCall] = useState(true);
  const [homeScreenData, setHomeScreenData] = useState(null);

  /** api call for getting home screen data */
  const homeScreen = useFetchGet(API.GET_HOME_DATA, goForHomeApiCall);

  /** response of api call for getting home screen data */
  useEffect(() => {
    if (!homeScreen.loading) {
      if (homeScreen.response?.status === GeneralResponses.STATUS_OK.CODE) {
        onHomeApiSuccess(homeScreen.response?.data);
      }
    } else {
      console.log('error occured in home api call');
    }
    setGoForHomeApiCall(false);
  }, [homeScreen.loading]);

  /** if api hit sucessfully it will get data from api */
  const onHomeApiSuccess = data => {
    setHomeScreenData(data);
  };

  const sliderData = [
    {
      cardTitle: `MacBook Pro Supercharged for pros`,
      cardDisc: `from $2,200.`,
      cardImage: SliderImage1,
      cardColor: BaseColor.primary,
    },
    {
      cardTitle: `MacBook Pro Supercharged for pros`,
      cardDisc: `from $2,200.`,
      cardImage: SliderImage1,
      cardColor: 'orange',
    },
  ];

  const onPressCart = () => {
    navigation.navigate(CART.CART_TAB);
  };
  return (
    <SafeAreaView style={styles.content}>
      <Header onPressCart={onPressCart} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrolView}>
        <View style={styles.searchView}>
          <SearchBar
            text={searchText}
            onChangeText={setSearchText}
            placeholder={'What are you looking for?'}
          />
        </View>

        <ScrollView horizontal style={styles.sliderView}>
          {sliderData?.length > 0 &&
            sliderData.map((item, index) => {
              return (
                <SliderItem
                  cardTitle={item.cardTitle}
                  cardDisc={item.cardDisc}
                  cardColor={item.cardColor}
                  cardImage={item.cardImage}
                  key={`'${index}'`}
                />
              );
            })}
        </ScrollView>

        <Seperator />

        {homeScreenData?.best_selling_products?.length > 0 && (
          <View style={styles.bestSellingView}>
            <HomeTitlesCard
              title={'Best selling products'}
              onPressViewAll={() => {
                navigation.navigate(HOME.CATEGORY_ITEMS, {
                  item: homeScreenData,
                  flag: 1,
                });
              }}
            />
            <FlatList
              horizontal
              style={styles.bestSellingSlider}
              data={homeScreenData?.best_selling_products}
              keyExtractor={(item, index) => index.toString()} // You may need to use a unique key
              renderItem={({item, index}) => (
                <BestSellingItem
                  image={BestSelling1} // Replace this with your actual image logic
                  itemCat={item?.slug}
                  itemName={item?.name}
                  type={'home'}
                  lowestPrice={item?.lowest_price}
                  price={item?.price}
                  onPressProduct={() =>
                    navigation.navigate(MAIN.PRODUCT_DETAIL, {item: item})
                  }
                />
              )}
            />
          </View>
        )}

        <Seperator />

        {homeScreenData?.latest_products?.length > 0 && (
          <View style={styles.latestView}>
            <HomeTitlesCard
              title={'Latest products'}
              onPressViewAll={() => {
                navigation.navigate(HOME.CATEGORY_ITEMS, {
                  item: homeScreenData,
                  flag: 2,
                });
              }}
            />
            <FlatList
              scrollEnabled={false}
              data={homeScreenData?.latest_products}
              numColumns={2}
              keyExtractor={(item, index) => `'${index}'`}
              columnWrapperStyle={styles.columWrapper}
              renderItem={({item}) => (
                <LatestProductItem
                  image={Latest1}
                  itemCat={item?.slug}
                  itemName={item?.name}
                  type={'home'}
                  lowestPrice={item?.lowest_price}
                  price={item?.price}
                  onPressProduct={() =>
                    navigation.navigate(MAIN.PRODUCT_DETAIL, {item: item})
                  }
                />
              )}
            />
          </View>
        )}

        <View style={styles.banner}>
          <Text whiteColor bold>
            {'iPhone 12 Pro'}
          </Text>
          <Text whiteColor bold>
            {'128 GB'}
          </Text>
          <MobileMain style={styles.mobile} />
          <Text textAlign="center" whiteColor>
            {'Starting from $899.'}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: '#FFBA49'}} bold>
              {'Shop Now'}
            </Text>
          </TouchableOpacity>
        </View>
        <Seperator />

        <View style={styles.popularView}>
          <HomeTitlesCard
            title={'Explore Popular Categories'}
            onPressViewAll={() => {
              navigation.navigate(HOME.CATEGORY_ITEMS, {
                item: homeScreenData,
                flag: 3,
              });
            }}
          />
          <FlatList
            data={homeScreenData?.categoriesWithCounts}
            numColumns={2}
            scrollEnabled={false}
            keyExtractor={(item, index) => `'${index}'`}
            columnWrapperStyle={styles.columWrapper}
            renderItem={({item}) => (
              <PopularCategory
                image={item.image}
                itemCat={item.name}
                onPress={() =>
                  navigation.navigate('SelectingCategory', {item: item})
                }
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
