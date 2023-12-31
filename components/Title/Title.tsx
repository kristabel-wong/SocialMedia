import React from 'react';

import {StyleSheet, Text} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

interface TitleProps {
  title: string;
}

export const Title = ({title}: TitleProps) => {
  return <Text style={style.title}>{title}</Text>;
};

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(24),
  },
});
