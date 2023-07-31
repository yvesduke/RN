import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class InputFormComponent extends React.Component {
  state = {
    stateNbrValue: 0,
    stateInputValue: '',
  };

  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 30,
            color: 'mediumslateblue',
            textAlign: 'center',
            margin: 60,
          }}>
          {' '}
          State Example{' '}
        </Text>
        <TextInput
          style={{backgroundColor: 'linen', height: 42, margin: 30}}
          placeholder="Enter Username"
          value={this.state.stateInputValue}
          onChange={e => {
            this.setState({stateInputValue: {e}});
          }}
        />
        <Text
          style={{
            fontSize: 45,
            color: 'slategray',
            textAlign: 'center',
            margin: 15,
          }}>
          {this.state.stateNbrValue}
        </Text>
        <TouchableOpacity
          style={{backgroundColor: 'dodgerblue', margin: 30, height: 54}}
          onPress={() => {
            this.setState({stateNbrValue: this.state.stateNbrValue + 1});
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              textAlign: 'center',
              margin: 12,
            }}>
            Change State
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InputFormComponent;
