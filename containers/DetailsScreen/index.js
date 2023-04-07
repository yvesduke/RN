import {View, Text, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';

const DetailsScreen = props => {
  const [nameState, setNameState] = useState(props.route.params.name);
  const [phoneState, setPhoneState] = useState(props.route.params.phone);

  useEffect(() => {
    setNameState(props.route.params.name);
    setPhoneState(props.route.params.phone);
  }, [props.route.params]);

  //   const [stateObject, setStateObject] = useState({});

  const {name, phone, callback} = props.route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>

      <View style={{marginVertical: 10}}>
        <Text>{nameState}</Text>
        <Text>{phoneState}</Text>
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

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            name: 'Home',
            params: {settings: 'pass back'},
            merge: true,
          });
        }}>
        <Text>Pass back props</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setNameState('Duke 2.0');
          setPhoneState('9999999');
        }}>
        <Text>reset state</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
