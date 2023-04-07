import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import ButtonWithFuncComp from '../../Components/ButtonWithFuncComp';
import ListwithFuncComp from '../../Components/ListWithFuncComp';
import ImageWithFuncComp from '../../Components/ImageWithFuncComp';

const HomeScreen = () => {
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
