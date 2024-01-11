import React from 'react';

import {StyleSheet, Text} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

interface ProfileTabTitleProps {
  title: string;
  isFocused: boolean;
}

export const ProfileTabTitle = ({title, isFocused}: ProfileTabTitleProps) => {
  return (
    <Text style={[style.title, !isFocused && style.titleNotFocused]}>
      {title}
    </Text>
  );
};

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '500'),
  },
});
