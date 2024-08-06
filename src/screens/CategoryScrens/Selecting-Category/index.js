import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import Text from '../../../components/Text/index';
import {BackIcon, Mobile} from '../../../assets/svg/Category';
import {styles} from './style';
import {IMAGE_BASE_URL} from '../../../services/ROUTES';
import {API, useFetchGet} from '../../../services';
import {GeneralResponses} from '../../../services/responses';
const SelectCategory = ({navigation, route}) => {
  const id = route?.params?.item;
  const [goForHomeApiCall, setGoForHomeApiCall] = useState(true);
  const [selectingCategory, setSelectingCategory] = useState(null);

  const category = useFetchGet(API.GET_CATEGORIES_PRODUCTS, goForHomeApiCall, {
    id: id?.id,
  });

  useEffect(() => {
    if (!category.loading) {
      if (category.response?.status === GeneralResponses.STATUS_OK.CODE) {
        onSelectCategoryApiSuccess(category.response?.data?.data);
      }
    } else {
      console.log('error occured in selecting category api call');
    }
    setGoForHomeApiCall(false);
  }, [category.loading]);

  const onSelectCategoryApiSuccess = data => {
    setSelectingCategory(data);
  };

  const showItems = item => {
    console.log('🚀 ~ showItems ~ item:', item.image.image);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('SelectSubCategory', {item: item})}>
        <View style={styles.rw}>
          <Text>{item?.name}</Text>
          <Image
            source={{uri: IMAGE_BASE_URL + item?.image?.image}}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <View style={styles.body}>
        <Text body1 style={styles.heading}>
          {id?.name}
        </Text>
        <Text body1 textGrey>
          {'Lorem ipsum dolor sit amet, consectetur '}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text semibold>See All</Text>
        </TouchableOpacity>

        <FlatList
          data={selectingCategory}
          renderItem={({item}) => showItems(item)}
        />
      </View>
    </View>
  );
};
export default SelectCategory;
