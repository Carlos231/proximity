import React, { useState } from 'react';
import
{
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
  TextInput
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () =>
{
  const [words, addWord] = useState([...DATA])
  const [input, setInput] = useState('')

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.title}>Proximity</Text>
      <FlatList
        style={styles.messages}
        data={words}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

      <SafeAreaView>

        <TextInput style={{ backgroundColor: "white" }} placeholder="Enter message..." onChangeText={input => setInput({
          id: '58694a0f-3da1-471f-bd96-145571we2d9d72',
          title: input
        })} defaultValue='' />
        <Text>{input.title}</Text>

        <Pressable style={styles.button} onPress={() => addWord([...words, input,
        ])} >
          <Text style={{ color: "white" }}>Add message</Text>
        </Pressable>
      </SafeAreaView>


    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  messages: {
    backgroundColor: 'white',
    padding: 40,
    marginHorizontal: 20,
    flexGrow: 0
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  button: {
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  }
});

export default App;