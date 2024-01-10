import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {globalStyle} from '../../assets/styles/globalStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../navigation/Routes';
import {getFontFamily} from '../../assets/fonts/helper';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';

export default function Profile({navigation}) {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              source={require('../../assets/images/default_profile.png')}
              style={style.profileImage}
            />
          </View>
        </View>
        <Text style={style.userName}>Emmanual Robertson</Text>
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}>45</Text>
            <Text style={style.statType}>Following</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>30M</Text>
            <Text style={style.statType}>Followers</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>100</Text>
            <Text style={style.statType}>Posts</Text>
          </View>
        </View>
        <View style={globalStyle.flex}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  profileImage: {
    width: horizontalScale(110),
    height: horizontalScale(110),
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 2,
    // borderColor: '#0150EC',
    borderColor: '#F30FFF',
    padding: horizontalScale(4),
    borderRadius: horizontalScale(110),
  },
  userName: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
  },
  statAmount: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(20),
    color: '#79869F',
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(20),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
});
