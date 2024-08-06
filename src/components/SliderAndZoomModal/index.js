import React from 'react';
import {View, Modal, Pressable, Dimensions} from 'react-native';
import {styles} from './styles';
import {Icon, Icons} from '..';
import ImageViewer from 'react-native-image-zoom-viewer';
import {BaseColor} from '../../config/theme';

const {height, width} = Dimensions.get('screen');

/**
 * model component for slider and zoom
 * @param param0 props accepted by this component
 * @returns React Component
 */
const SliderAndZoomModal = ({visible, images, primaryAction}) => {
  /** header component */
  const headerView = () => {
    return (
      <View
        style={[
          styles.headerIcons,
          {backgroundColor: BaseColor.ButtonBackground},
        ]}>
        <Pressable onPress={primaryAction}>
          <Icon name={Icons.CROSS} color={BaseColor.lowemphasis} size={18} />
        </Pressable>
      </View>
    );
  };

  return (
    <Modal transparent={true} visible={visible}>
      <View
        style={[
          styles.centeredView,
          {
            backgroundColor: BaseColor.highemphasis,
          },
        ]}>
        <View style={[styles.modalView]}>
          <View style={{height: height / 1.6, justifyContent: 'center'}}>
            {/* {images && (
              <Carousel
                autoplay
                autoplayTimeout={5000}
                loop
                index={0}
                pageSize={width}
              >
                {images.map((item, index) => {
                  return (
                    <View key={index.toString()}>
                      <Image
                        resizeMode={'stretch'}
                        style={{width: width, height: height / 1.6}}
                        source={{uri: item.url}}
                      />
                    </View>
                  );
                })}
              </Carousel>
            )} */}
            <ImageViewer
              imageUrls={images}
              renderIndicator={() => <></>}
              maxOverflow={0}
              saveToLocalByLongPress={false}
              renderFooter={(currentIndex, allSize) => (
                <View
                  style={{
                    width: width,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  {images.map((item, index) => {
                    return (
                      <View
                        key={index.toString()}
                        style={{
                          height: 12,
                          width: 12,
                          borderRadius: 6,
                          backgroundColor:
                            currentIndex === index
                              ? BaseColor.mediumemphasis
                              : BaseColor.whiteColor,
                          marginRight: 5,
                          borderWidth: 1,
                          borderColor:
                            currentIndex !== index
                              ? BaseColor.bordercolor
                              : BaseColor.primaryDark,
                          bottom: 17,
                        }}
                      />
                    );
                  })}
                </View>
              )}
            />
          </View>
        </View>
      </View>
      {headerView()}
    </Modal>
  );
};

export default SliderAndZoomModal;
