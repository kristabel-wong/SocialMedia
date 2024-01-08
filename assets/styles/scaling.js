import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch(); //screen size for iPhone 6, iPhone 7, iPhone 8.

// * DEVICE NOTCH - a notch on a device refers to the cutout or indentation at the top of a screen, and it's usually housing the front-facing camera and other sensors.It's a design feature that allows for more screen space by removing the besel around the front-facing camera and other sensors.

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

export const horizontalScale = size => (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

export const verticalScale = size => (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

export const scaleFontSize = size =>
  Math.round((width / guidelineBaseFonts()) * size);

// * There is a library called React Native Responsive Screen, but its a bit outdated and newer React Native versions are coming out
