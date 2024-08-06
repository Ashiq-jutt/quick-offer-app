import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {ForgetIcon} from '../../assets/images';
import Text from '../../components/Text';
import {Button, Icon, Icons, TextInput} from '../../components';
import {BaseColor} from '../../config/theme';
import useEmailValidation from '../../hooks/useEmailValidator';
import {API, useFetchPost} from '../../services';
import {GeneralResponses} from '../../services/responses';

const Index = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [goForReset, setGoForReset] = useState(false);
  const [error, setError] = useState('');

  const isEmailValid = useEmailValidation(email);

  /** api call for signin */
  const resetApi = useFetchPost(
    API.RESET_PASSWORD,
    {
      email: email,
    },
    goForReset,
  );

  /** response of api call for reset */
  useEffect(() => {
    if (!resetApi.loading) {
      if (resetApi.response?.status === GeneralResponses.STATUS_OK.CODE) {
        onSuccessApi(resetApi?.response);
      } else if (
        resetApi.response?.status === GeneralResponses.STATUS_401_LOGIN.CODE
      ) {
        setError(GeneralResponses.STATUS_401_LOGIN.MESSAGE);
      }
    } else {
      console.log('error occured in signin api call');
    }
    setGoForReset(false);
  }, [resetApi.loading]);

  /**
   * function will be called on api success
   * @param {*} response api resposnse
   */
  const onSuccessApi = response => {
    console.log(response?.data?.message);
  };

  const onResetPress = () => {
    setGoForReset(true);
  };
  const onBackPress = () => {
    navigation.goBack();
  };

  const checkDisabled = () => {
    var disabled = false;
    if (!resetApi.loading && isEmailValid) {
      disabled = false;
    } else {
      disabled = true;
    }

    return disabled;
  };

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={BaseColor.primary}
        translucent={false}
      />
      <SafeAreaView style={styles.content}>
        <TouchableOpacity onPress={onBackPress} style={styles.backBtn}>
          <Icon
            name={Icons.ARROW_BACK}
            type={'MaterialCommunity'}
            size={28}
            color={BaseColor.text}
          />
        </TouchableOpacity>
        <View style={styles.main}>
          <View style={{}}>
            <Text title1 semibold textAlign={'center'}>{`Reset Password`}</Text>

            <View style={styles.imageView}>
              <Image source={ForgetIcon} style={styles.image} />
            </View>

            <Text
              textGrey
              textAlign={
                'center'
              }>{`Enter your Email and instructions will be\nsent to you!`}</Text>
            <View style={styles.email}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                title={'Email Address'}
              />
              {!isEmailValid && email.length > 0 && (
                <Text body2 semibold iserror>{`Email not Valid`}</Text>
              )}
            </View>

            <TouchableOpacity
              onPress={onBackPress}
              style={{marginBottom: 30, marginTop: 10}}>
              <Text subhead bold primary textAlign={'right'}>{`Sign In`}</Text>
            </TouchableOpacity>

            <Button
              text={'Send Password Reset Link'}
              loading={resetApi.loading}
              disabled={checkDisabled() ? true : false}
              onPress={onResetPress}
            />
          </View>
        </View>
        <View style={styles.borderDown} />
      </SafeAreaView>
    </>
  );
};

export default Index;
