import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {globalStyle} from '../../assets/styles/globalStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {scaleFontSize} from '../../assets/styles/scaling';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {Routes} from '../../navigation/Routes';

export default function Profile({navigation}) {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Home)}>
        <FontAwesomeIcon
          icon={faHouse}
          color={'#898DAE'}
          size={scaleFontSize(20)}
        />
      </TouchableOpacity>
      <Text>Profile Page</Text>
    </SafeAreaView>
  );
}
