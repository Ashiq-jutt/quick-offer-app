import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import {CartItem, CategoryTopBar, Header, SearchBar} from '../../components';
import {Cart1} from '../../assets/images';

const Index = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const catData = [
    'Iphone',
    'Cell Phones',
    'MacBook',
    'Laptop',
    'Smart Watches',
  ];

  return (
    <SafeAreaView style={styles.content}>
      <Header onPressFirstIcon={() => navigation.openDrawer()} />
      <View style={styles.main}>
        <View style={styles.searchBar}>
          <SearchBar
            text={searchText}
            onChangeText={setSearchText}
            placeholder={'Search Here'}
          />
        </View>

        <CategoryTopBar
          categoryData={catData}
          selectedCategory={selectedCategory}
          setSelected={setSelectedCategory}
        />

        <View style={styles.itemsView}>
          <CartItem
            image={Cart1}
            title={'Black - Unlocked'}
            specs={'iPhone 11 64GB'}
            price={'254.00'}
          />
          <CartItem
            image={Cart1}
            title={'Silver - Locked'}
            specs={'iPhone 11 32GB'}
            price={'200.00'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
