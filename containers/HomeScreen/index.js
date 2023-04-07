import React, {useEffect} from 'react';

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

const HomeScreen = ({navigation, route}) => {
  //componentdidmount
  useEffect(() => {}, []);

  //componentDidUpdate
  useEffect(() => {
    if (route.params) {
      console.log(route.params);
    }
  }, [route.params]);

  //   useEffect(() => {
  //     if (route.params?.post) {
  //       // Post updated, do something with `route.params.post`
  //       // For example, send the post to the server

  //       console.log(route.params?.post);
  //     }
  //   }, [route.params?.post]);

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
