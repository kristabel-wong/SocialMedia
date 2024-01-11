import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

export const ProfileTabContent = () => {
  return (
    <ScrollView
      style={style.profileTabContentContainer}
      showsVerticalScrollIndicator={false}>
      <View style={style.profileTabContent}>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  profileTabContentContainer: {
    backgroundColor: '#FFFFFF',
  },
  profileTabContent: {
    paddingHorizontal: horizontalScale(21),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    width: horizontalScale(140),
    height: verticalScale(90),
    marginTop: verticalScale(11),
  },
});
