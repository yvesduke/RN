import React from 'react';
import {View, Image, ImageBackground, StyleSheet, Text} from 'react-native';

const Separator = () => <View style={styles.separator} />;
const image = {uri: 'https://picsum.photos/seed/picsum/200/300'};

const ImageWithFuncComp = () => {
  return (
    <View>
      <Separator />
      <Image
        style={styles.stretch}
        source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
      />
      <Separator />
      <Image
        style={styles.logo}
        source={{
          url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <Separator />
      <ImageBackground source={image} resizeMethod="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>

      <Separator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#cfc4b6',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  stretch: {
    width: 210,
    height: 200,
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 15,
    resizeMode: 'stretch',
  },
  logo: {
    width: 66,
    height: 58,
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 15,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ImageWithFuncComp;
