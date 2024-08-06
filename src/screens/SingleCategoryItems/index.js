import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import styles from './styles';
import {Header, PopularCategory, SearchBar} from '../../components';
import {API, useFetchGet} from '../../services';
import {GeneralResponses} from '../../services/responses';

const Index = ({navigation, route}) => {
  const item = route.params?.item;
  const [searchText, setSearchText] = useState('');
  const [categoryData, setCategoryData] = useState([]);
  const [goForCatApiCall, setGoForCatApiCall] = useState(true);

  /** api call for getting Cat screen data */
  const catScreen = useFetchGet(API.GET_CATEGORIES_PRODUCTS, goForCatApiCall, {
    id: item?.id,
  });

  /** response of api call for getting Cat screen data */
  useEffect(() => {
    console.log(catScreen.response);
    if (!catScreen.loading) {
      if (catScreen.response?.status === GeneralResponses.STATUS_OK.CODE) {
        onCatApiSuccess(catScreen.response?.data?.data);
      }
    } else {
      console.log('error occured in cat api call');
    }
    setGoForCatApiCall(false);
  }, [catScreen.loading]);

  /** if api hit sucessfully it will get data from api */
  const onCatApiSuccess = data => {
    setCategoryData(data);
  };

  return (
    <SafeAreaView style={styles.content}>
      <Header onPressFirstIcon={() => navigation.openDrawer()} />
      <View style={styles.main}>
        <View style={styles.searchBar}>
          <SearchBar
            text={searchText}
            onChangeText={setSearchText}
            placeholder={'What are you looking for?'}
          />
        </View>

        <View style={styles.itemsView}>
          <FlatList
            data={categoryData}
            numColumns={2}
            keyExtractor={(item, index) => `'${index}'`}
            columnWrapperStyle={styles.columWrapper}
            renderItem={({item}) => (
              <PopularCategory image={item.image} itemCat={item.name} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
