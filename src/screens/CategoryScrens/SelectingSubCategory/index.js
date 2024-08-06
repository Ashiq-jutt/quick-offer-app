import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import Text from '../../../components/Text/index';
import {
  BackIcon,
  Mobile,
  MoobilePhone,
  Search,
} from '../../../assets/svg/Category';
import {styles} from './style';
import {API, useFetchGet} from '../../../services';
import {GeneralResponses} from '../../../services/responses';
import {MAIN} from '../../../navigation/routes';
const SelectSubCategory = ({navigation, route}) => {
  const id = route.params.item;
  const [goForHomeApiCall, setGoForHomeApiCall] = useState(true);
  const [selectingCategory, setSelectingCategory] = useState(null);

  const category = useFetchGet(API.CATEGORY_BRAND, goForHomeApiCall, {
    id: id?.id,
  });

  useEffect(() => {
    if (!category.loading) {
      if (category.response?.status === GeneralResponses.STATUS_OK.CODE) {
        onSelectCategoryApiSuccess(category.response?.data?.data);
      }
    } else {
      console.log('error occured in selecting sub category api call');
    }
    setGoForHomeApiCall(false);
  }, [category.loading]);

  const onSelectCategoryApiSuccess = data => {
    setSelectingCategory(data);
  };

  const showItems = item => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(MAIN.PRODUCT_DETAIL, {item: item})}>
        <View style={styles.box}>
          <MoobilePhone style={styles.icon} />
          <View style={{marginVertical: 10}}>
            <Text bold>{item.label}</Text>
            <View style={styles.rw}>
              <Text>{'starting From '}</Text>
              <Text bold>{'$ 380'}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.txt}>{''}</Text>
        <Text style={styles.txt}>{id?.name}</Text>
        <Search />
      </View>

      <View style={styles.body}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Result')}>
          <Text>Filter</Text>
        </TouchableOpacity>

        <Text body1 textGrey style={{marginBottom: 10}}>
          {selectingCategory?.length + ' result '}
        </Text>

        <FlatList
          data={selectingCategory}
          renderItem={({item}) => showItems(item)}
          numColumns={2}
          columnWrapperStyle={{
            marginBottom: 15,
            justifyContent: 'space-between',
          }}
        />
      </View>
    </View>
  );
};
export default SelectSubCategory;
