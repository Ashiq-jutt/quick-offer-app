import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import {
  BestSellingItem,
  Header,
  LatestProductItem,
  PopularCategory,
  SearchBar,
} from '../../components';
import {API, useFetchGet} from '../../services';
import {GeneralResponses} from '../../services/responses';
import {BestSelling1, Latest1, heart} from '../../assets/images';
import {CART, MAIN} from '../../navigation/routes';

const Index = ({navigation, route}) => {
  const data = route.params?.item;

  const flag = route.params?.flag;
  const [searchText, setSearchText] = useState('');
  const [categoryData, setCategoryData] = useState(data);
  const [goForCatApiCall, setGoForCatApiCall] = useState(false);

  /** api call for getting Cat screen data */
  const catScreen = useFetchGet(API.GET_CATEGORIES, goForCatApiCall);

  /** response of api call for getting Cat screen data */
  useEffect(() => {
    console.log(catScreen.response);
    if (!catScreen.loading) {
      if (catScreen.response?.status === GeneralResponses.STATUS_OK.CODE) {
        onCatApiSuccess(catScreen.response?.data?.data);
      }
    } else {
      console.log('error occured in cattegoryItems api call');
    }
    setGoForCatApiCall(false);
  }, [catScreen.loading]);

  /** if api hit sucessfully it will get data from api */
  const onPressCart = () => {
    navigation.navigate(CART.CART_TAB);
  };
  return (
    <SafeAreaView style={styles.content}>
      <Header
        onPressCart={onPressCart}
        onPressFirstIcon={() => navigation.openDrawer()}
      />
      <View style={styles.main}>
        <View style={styles.searchBar}>
          <SearchBar
            text={searchText}
            onChangeText={setSearchText}
            placeholder={'What are you looking for?'}
          />
        </View>
        {/* <ScrollView contentContainerStyle={{flexGrow: 1}}> */}
        {flag == 1 && (
          <FlatList
            contentContainerStyle={{flexGrow: 1, paddingBottom: 150}}
            data={categoryData?.best_selling_products}
            numColumns={2}
            keyExtractor={(item, index) => `'${index}'`}
            columnWrapperStyle={[styles.columWrapper]}
            renderItem={({item}) => (
              <BestSellingItem
                image={BestSelling1}
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
        )}
        {flag == 2 && (
          <FlatList
            contentContainerStyle={{flexGrow: 1, paddingBottom: 150}}
            data={categoryData?.latest_products}
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
        )}
        {flag == 3 && (
          <FlatList
            contentContainerStyle={{flexGrow: 1, paddingBottom: 150}}
            data={categoryData?.categoriesWithCounts}
            numColumns={2}
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
        )}
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default Index;
