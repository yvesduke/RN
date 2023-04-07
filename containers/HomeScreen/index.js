import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import ButtonWithFuncComp from '../../Components/ButtonWithFuncComp';
import ListwithFuncComp from '../../Components/ListWithFuncComp';
import ImageWithFuncComp from '../../Components/ImageWithFuncComp';

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <ButtonWithFuncComp bgClr="pink" />
          <ListwithFuncComp />
          <ImageWithFuncComp />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', {
              name: 'Duke',
              phone: '123456789',
              callback: data => {
                console.log(data);
              },
            });
          }}>
          <Text>Goto Details</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
