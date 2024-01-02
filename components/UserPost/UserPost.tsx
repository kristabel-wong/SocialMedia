import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {UserProfileImage} from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';

interface UserPostProps {
  firstName: string;
  lastName: string;
  location: string;
  image: any;
  bookmarks: number;
  likes: number;
  comments: number;
  profileImage: any;
}

export const UserPost = ({
  firstName,
  lastName,
  location,
  image,
  bookmarks,
  likes,
  comments,
  profileImage,
}: UserPostProps) => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.userPostHeader}>
        <View style={style.userDetailsContainer}>
          <UserProfileImage profileImage={profileImage} imageDimensions={48} />
          <View style={style.userPostHeaderText}>
            <Text style={style.userName}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={style.location}>{location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={24} />
      </View>
      <View style={style.postImage}>
        <Image source={image} />
      </View>
      <View style={style.userPostStats}>
        <View style={style.likesContainer}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={style.userPostStatsText}>{likes}</Text>
        </View>
        <View style={style.commentsContainer}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={style.userPostStatsText}>{comments}</Text>
        </View>
        <View style={style.commentsContainer}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={style.userPostStatsText}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: 35,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: '#EFF2F6',
  },
  userPostHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userPostHeaderText: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  userDetailsContainer: {
    flexDirection: 'row',
  },
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
  likesContainer: {
    flexDirection: 'row',
  },
  userPostStatsText: {
    marginLeft: 3,
    color: '#79869F',
  },
  commentsContainer: {
    flexDirection: 'row',
    marginLeft: 27,
  },
  userPostStats: {
    marginLeft: 10,
    flexDirection: 'row',
  },
});
