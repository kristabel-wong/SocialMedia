import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {UserProfileImage} from '../UserProfileImage/UserProfileImage';

export interface UserStoryProps {
  firstName: string;
  profileImage: any;
}

export const UserStory = ({firstName, profileImage}: UserStoryProps) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={profileImage} imageDimensions={65} />
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    color: '#022150',
    marginTop: 8,
    textAlign: 'center',
  },
});
