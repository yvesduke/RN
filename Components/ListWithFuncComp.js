import React, {useState} from 'react';
import {
  SafeAreaView,
  //   View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const StaticDataSource = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

// const Item = ({title,}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const ListwithFuncComp = () => {
  const [selectdId, setSelectedId] = useState();
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectdId ? '#f0b467' : '#fff2c2'; // #fff2c2 '#6e3b6e' : '#f9c2ff'
    const color = item.id === selectdId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={StaticDataSource}
        // renderItem={({item}) => <Item title={item.title} />}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectdId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff2c2',
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 12,
  },
});

export default ListwithFuncComp;
