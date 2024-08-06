import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import Text from '../../components/Text';
import {Button, Icon, Icons, Header} from '../../components';

const Index = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.content}>
        <Header
          firstIcon={'Back'}
          onPressFirstIcon={() => navigation.goBack()}
          titleText
          title={'About Us'}
          showLike={false}
          lastIcon={false}
        />

        <View style={styles.main}>
          <View style={styles.card}>
            <Text headline text medium>
              {'About Our Store'}
            </Text>
            <Text
              bold
              body2
              textGrey>{`Since 1985, we’re creating the awesome products & promise to give high quality in the eCommerce market for all our customers residing any part of the world.`}</Text>
            <Text
              regular
              body2
              textGrey>{`Ut enim nunc, luctus vel nulla id, lacinia ultrices libero. Maecenas quis interdum nibh. Suspendisse purus nibh, vestibulum porttitor orci et, egestas maximus ligula. Proin pharetra convallis est, ut aliquam nisl consequat cursus. Donec ut finibus dui.`}</Text>
          </View>

          <View style={styles.card}>
            <Text headline text medium>
              {'Our Mission'}
            </Text>
            <Text
              regular
              body2
              textGrey>{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`}</Text>
          </View>

          <View style={styles.card}>
            <Text headline text medium>{`Our Vision`}</Text>
            <Text
              regular
              body2
              textGrey>{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`}</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
