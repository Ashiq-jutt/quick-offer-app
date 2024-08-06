import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {LoginTopDesign} from '../../assets/images';
import Text from '../../components/Text';
import {Button, CheckBox, Icon, Icons, TextInput} from '../../components';
import {BaseColor} from '../../config/theme';
import {MAIN} from '../../navigation/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useEmailValidation from '../../hooks/useEmailValidator';
import {API, useFetchPost} from '../../services';
import {GeneralResponses} from '../../services/responses';

const Index = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [goForSignin, setGoForSignin] = useState(false);
  const [error, setError] = useState('');

  const isEmailValid = useEmailValidation(email);

  /** api call for signin */
  const signinApi = useFetchPost(
    API.LOGIN,
    {
      email: email,
      password: password,
    },
    goForSignin,
  );

  useEffect(() => {
    checkLogedIn();
  }, []);

  /** response of api call for signin */
  useEffect(() => {
    if (!signinApi.loading) {
      if (signinApi.response?.status === GeneralResponses.STATUS_OK.CODE) {
        onSuccessApi(signinApi?.response);
      } else if (
        signinApi.response?.status === GeneralResponses.STATUS_401_LOGIN.CODE
      ) {
        setError(GeneralResponses.STATUS_401_LOGIN.MESSAGE);
      }
    } else {
      console.log('error occured in signin api call');
    }
    setGoForSignin(false);
  }, [signinApi.loading]);

  /**
   * function will be called on api success
   * @param {*} response api resposnse
   */
  const onSuccessApi = async response => {
    if (rememberMe) {
      const userCredentials = {email, password};
      const jsonValue = JSON.stringify(userCredentials);
      await AsyncStorage.setItem('userCredentials', jsonValue);
    } else {
      await AsyncStorage.removeItem('userCredentials');
    }
    await AsyncStorage.setItem('token', response?.data?.access_token);
    navigation.replace(MAIN.DRAWER);
    console.log('Data stored successfully');
  };

  const checkLogedIn = async () => {
    console.log('runing');
    const storedCredentialsString = await AsyncStorage.getItem(
      'userCredentials',
    );

    if (storedCredentialsString) {
      const storedCredentials = JSON.parse(storedCredentialsString);
      setEmail(storedCredentials.email);
      setPassword(storedCredentials.password);
      setRememberMe(true);
      console.log(storedCredentials.email);
    }
  };

  const onLoginPress = async () => {
    setGoForSignin(true);
    // navigation.replace(MAIN.DRAWER);
  };

  const onCreateAccountPress = () => {
    navigation.navigate(MAIN.SIGNUP);
  };

  const onForgetPress = () => {
    navigation.navigate(MAIN.RESET_PASSWORD);
  };

  const rememberFunction = async () => {
    setRememberMe(!rememberMe);
  };

  const checkDisabled = () => {
    var disabled = false;
    if (!signinApi.loading && isEmailValid && password.length > 3) {
      disabled = false;
    } else {
      disabled = true;
    }

    return disabled;
  };
  return (
    <>
      {/* <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      /> */}
      <SafeAreaView style={styles.content}>
        <View style={styles.imageView}>
          <Image source={LoginTopDesign} style={styles.image} />
        </View>

        <View style={styles.main}>
          <View style={{}}>
            <Text title1 semibold textAlign={'center'}>{`Sign In`}</Text>
            <View style={styles.email}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                title={'Email'}
              />
              {!isEmailValid && email.length > 0 && (
                <Text body2 semibold iserror>{`Email not Valid`}</Text>
              )}
            </View>

            <View style={styles.password}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder={'Password'}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.rememberMe}>
              <CheckBox
                check={rememberMe}
                func={() => rememberFunction()}
                color={BaseColor.primary}
                size={20}
                label={'Remember me'}
              />
              <TouchableOpacity
                onPress={onForgetPress}
                activeOpacity={0.6}
                style={styles.forgetView}>
                <Text
                  text
                  body2
                  semibold
                  style={styles.forgetText}>{`Forgot password?`}</Text>
                <Icon
                  name={Icons.ARROW_RIGHT}
                  type={'ant'}
                  size={20}
                  color={BaseColor.primary}
                />
              </TouchableOpacity>
            </View>
            <Text regular overline iserror>
              {error && error}
            </Text>
            <Button
              text={'LOGIN'}
              onPress={onLoginPress}
              loading={signinApi.loading}
              disabled={checkDisabled() ? true : false}
            />

            <View style={styles.createView}>
              <Text text body2 semibold>{`Don’t have an account?`}</Text>
              <TouchableOpacity
                onPress={onCreateAccountPress}
                activeOpacity={0.6}
                style={styles.createBtn}>
                <Text primary headline bold>{`Create account`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.borderDown} />
      </SafeAreaView>
    </>
  );
};

export default Index;
