import {View, Text, TouchableOpacity} from 'react-native';

const DetailsScreen = props => {
  const {name, phone, callback} = props.route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>

      <View style={{marginVertical: 10}}>
        <Text>{name}</Text>
        <Text>{phone}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.push('Details');
        }}>
        <Text>Goto Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          //   props.navigation.navigate('Home');
          if (callback) {
            callback({name: 'YVES'});
          }
        }}>
        <Text>run callback</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
