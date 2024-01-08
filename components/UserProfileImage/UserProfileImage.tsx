import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

interface UserProfileImageProps {
  profileImage: any;
  imageDimensions: number;
}

export const UserProfileImage = ({
  profileImage,
  imageDimensions,
}: UserProfileImageProps) => {
  return (
    <View style={[style.userImageContainer, {borderRadius: imageDimensions}]}>
      <Image
        source={profileImage}
        style={{width: imageDimensions, height: imageDimensions}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 2,
    padding: horizontalScale(3),
  },
});
