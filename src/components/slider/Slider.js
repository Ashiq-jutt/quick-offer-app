import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {BestSelling1} from '../../assets/images';

const Slider = ({images, interval = 5000}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % images?.length;
    setCurrentSlide(nextIndex);
    scrollViewRef.current?.scrollTo({
      x: Dimensions.get('window').width * nextIndex,
    });
  };

  const handleDotPress = index => {
    setCurrentSlide(index);
    scrollViewRef.current?.scrollTo({
      x: Dimensions.get('window').width * index,
    });
  };

  const renderSlides = () => {
    return images?.map((image, index) => (
      <Image key={index} source={BestSelling1} style={[styles.slide]} />
    ));
  };

  const renderDots = () => {
    return images?.map((_, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => handleDotPress(index)}
        style={[
          styles.dot,
          {backgroundColor: index === currentSlide ? '#007BFF' : '#D3D3D3'},
        ]}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const slideIndex = Math.round(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
          );
          setCurrentSlide(slideIndex);
        }}
        automaticallyAdjustContentInsets={false}
        decelerationRate="fast"
        snapToInterval={Dimensions.get('window').width}
        snapToAlignment="start"
        contentContainerStyle={{width: `${100 * images?.length}%`}}
        scrollEventThrottle={200}>
        {renderSlides()}
      </ScrollView>
      <View style={styles.dotContainer}>{renderDots()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 200, // Adjust the height as needed
    overflow: 'hidden',
  },
  slide: {
    width: Dimensions.get('window').width,
    height: 170,
    borderRadius: 30,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});

export default Slider;
