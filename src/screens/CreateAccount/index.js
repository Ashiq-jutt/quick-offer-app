import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, StatusBar, TouchableOpacity} from 'react-native';
import styles from './styles';
import Text from '../../components/Text';
import {Button, Icon, Icons, TextInput} from '../../components';
import {BaseColor} from '../../config/theme';
import useEmailValidation from '../../hooks/useEmailValidator';
import Toast from 'react-native-toast-message';
import {API, useFetchPost} from '../../services';
import {GeneralResponses} from '../../services/responses';

const Index = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [goForSignup, setGoForSignUp] = useState(false);

  const isEmailValid = useEmailValidation(email);

  /** api call for signup */
  const signupApi = useFetchPost(
    API.REGISTER_USER,
    {
      name: name,
      email: email,
      password: password,
    },
    goForSignup,
  );

  /** response of api call for signup */
  useEffect(() => {
    console.log(signupApi.response);
    if (!signupApi.loading) {
      if (signupApi.response?.status === GeneralResponses.STATUS_OK.CODE) {
        onSuccessApi(signupApi);
      } else if (
        signupApi.response?.status === GeneralResponses.STATUS_422.CODE
      ) {
        setIsError(true);
        setMessage(GeneralResponses.STATUS_422.MESSAGE);
      }
    } else {
      console.log('error occured in signup api call');
    }
    setGoForSignUp(false);
  }, [signupApi.loading]);

  /**
   * function on success of api
   */
  const onSuccessApi = async () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Account Created',
      text2: 'You can login now via using this account.',
    });
    navigation.goBack();
  };

  /**
   * function Called onpress of create Account
   */
  const onCreatePress = () => {
    setGoForSignUp(true);
  };

  const onBackPress = () => {
    navigation.goBack();
    // setLoading(false);
  };

  // const onCreatePress = async () => {
  //   setLoading(true);
  //   let data = await Axios_Fetch(
  //     `${ROUTES.register}?name=${name}&email=${email}&password=${password}`,
  //     'post',
  //   );
  //   console.log(data, '-------');
  //   if (data) {
  //     setLoading(false);
  //     Toast.show({
  //       type: 'success',
  //       position: 'bottom',
  //       text1: 'Account Created',
  //       text2: 'You can login now via using this account.',
  //     });
  //     navigation.goBack();
  //     console.log('account created successfully');
  //   } else {
  //     console.error('Error:', data);
  //     setLoading(false);
  //   }
  // };

  const checkDisabled = () => {
    var disabled = false;
    if (
      !signupApi.loading &&
      isEmailValid &&
      name.length > 2 &&
      password.length > 8
    ) {
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
            <Text
              title1
              semibold
              textAlign={'center'}>{`Create Your Account`}</Text>

            <View style={{marginVertical: 30}}>
              <View style={styles.name}>
                <TextInput value={name} onChangeText={setName} title={'Name'} />
                {name.length > 0 && name.length < 3 && (
                  <Text
                    body2
                    semibold
                    iserror>{`Name must not less than 3 characters`}</Text>
                )}
              </View>

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

              <View style={styles.password}>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  title={'Password'}
                />
                {password.length > 0 && password.length < 8 && (
                  <Text
                    body2
                    semibold
                    iserror>{`Password must not less than 8 characters`}</Text>
                )}
              </View>
            </View>

            <Text regular overline iserror>
              {isError && message}
            </Text>
            <Button
              text={'Create Account'}
              onPress={onCreatePress}
              loading={signupApi.loading}
              disabled={checkDisabled() ? true : false}
            />

            <View style={styles.createView}>
              <Text text body2 semibold>{`Already have an account?`}</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={onBackPress}
                style={styles.createBtn}>
                <Text primary headline bold>{`Sign In`}</Text>
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
