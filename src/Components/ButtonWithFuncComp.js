import React from 'react';
import {View, Button,TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const ButtonWithFuncComp = props => {
  return (

    <View>
      <Text style={styles.title}>This is a Titlle.</Text>
      <Button
        title="Clickable Button"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Separator />
      <Button
        title="Disabled Button"
        disabled
        onPress={() =>
          Alert.alert('Cannot press this Button because its deabled by default')
        }
      />
      <Separator/>
      <Text style={styles.title}>Touchable Opacity Button.</Text>
      <TouchableOpacity style={styles.fixToText}>
        <Text>Hello Button</Text>
      </TouchableOpacity>
      <Separator/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ButtonWithFuncComp;
