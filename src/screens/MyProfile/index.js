import React, {useState} from 'react';
import {SafeAreaView, View, Modal, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Button, CategoryTopBar, Header, Icon, Icons, TextInput} from '../../components';
import {BaseColor} from '../../config/theme';
import Text from '../../components/Text';
import { Edit } from '../../assets/svg/Category';

const Index = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [itemToEdit, setItemToEdit] = useState('');
  const [loder, setLoder] = useState(false);
  const catData = ['My Orders', 'My trade-ins', 'My Profile', 'My favorites'];

  const closeModal = () => setItemToEdit('');
  return (
    <>
      <SafeAreaView style={styles.content}>
        <Header
          onPressFirstIcon={() => navigation.openDrawer()}
          showLike={false}
          lastIcon
          lastIconName={'Logout'}
        />
        <View style={styles.main}>
          <CategoryTopBar
            categoryData={catData}
            selectedCategory={selectedCategory}
            setSelected={setSelectedCategory}
            style={{backgroundColor: BaseColor.whiteColor}}
          />

          <View style={styles.card1}>
            <Text text regular headline>
              {'My Info'}
            </Text>
            <Text textGrey regular body2>
              {'Name'}
            </Text>
            <Text textGrey regular body2>
              {'sbk11@gmail.com'}
            </Text>
            <Text primary semibold small overline style={{textDecorationLine: 'underline',color:'#3C63EE'}}>
              {'Change Password'}
            </Text>
            <TouchableOpacity 
              onPress={() => setItemToEdit('Personal Information')}
              style={styles.edit}>
              <Edit/>
            </TouchableOpacity>
          </View>

          <View style={styles.card2}>
            <Text text regular headline>
              {'Billing address'}
            </Text>
            <Text textGrey regular body2>
              {'There is no address registered yet.'}
            </Text>
             

            <TouchableOpacity style={styles.edit}>
            <Edit/>
            </TouchableOpacity>
          </View>

          <View style={styles.card2}>
            <Text text regular headline>
              {'Shipping address'}
            </Text>
            <Text textGrey regular body2>
              {'Full name'}
            </Text>
            <Text textGrey regular body2>
              {'Phone number'}
            </Text>
            <Text textGrey regular body2>
              {'full address'}
            </Text>

            <TouchableOpacity style={styles.edit}>
            <Edit/>
            </TouchableOpacity>
          </View>

          <View style={styles.card2}>
            <Text text regular headline>
              {'My preferences'}
            </Text>
            <Text textGrey regular body2>
              {'There is no reference submition yet.'}
            </Text>
            <TouchableOpacity style={styles.edit}>
            <Edit/>
            </TouchableOpacity>
          </View>


        </View>
      </SafeAreaView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={itemToEdit !== '' ? true : false}
        
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              disabled={loder}
              style={styles.closeModal}
              onPress={closeModal}>
              <Icon
                name={Icons.CLOSE}
                size={30}
                color={BaseColor.primary}
                type="ant"
              />
            </TouchableOpacity>
            <>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: BaseColor.textGrey,
                  paddingBottom: 10,
                }}>
                <Text textGrey regular footnote>
                  {itemToEdit}
                </Text>
              </View>

              <View style={{flex: 1}}>
                <View style={styles.inputView}>
                <Text textGrey>{'Name'}</Text>
               <TextInput placeholder="Enter your first name" backgroundColor="#F5F6FA" 
               style={{marginVertical:5}}/>
                </View>

                <View style={styles.inputView}>
                <Text textGrey>{'Last Name'}</Text>
               <TextInput placeholder="Enter your last name" backgroundColor="#F5F6FA" 
               style={{marginVertical:5}}/>
                </View>

                <View style={styles.inputView}>
                <Text textGrey>{'Email'}</Text>
               <TextInput placeholder="Enter your Email" backgroundColor="#F5F6FA" 
               style={{marginVertical:5}}/>
                </View>

                <View style={styles.inputView}>
                <Text textGrey>{'Phone No'}</Text>
               <TextInput placeholder="Enter your first name" backgroundColor="#F5F6FA" 
               style={{marginVertical:5}}/>
                </View>


              </View>

              <Button text={'Save'} />
            </>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Index;
