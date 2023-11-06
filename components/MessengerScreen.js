import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
} from "react-native";

import HeaderScreen from "./Header";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.header}>{title}</Text>
  </View>
);

const MessengerScreen = () => {
  const [words, addWord] = useState([...DATA]);
  const [input, setInput] = useState("");

  const addMessage = () => {
    if (input) {
      // temp id since will update by db
      var id = Math.floor(Math.random() * 10000);
      const message = {
        id,
        title: input,
      };
      console.log("Adding ", id, input);
      addWord([...words, message]);
      setInput("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderScreen />

      <FlatList
        style={styles.messages}
        data={words}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />

      <SafeAreaView style={styles.footer}>
        {/* TODO: Increase input length */}
        <TextInput
          multiline
          placeholder="Say hello!"
          rows={4}
          maxLength={40}
          onChangeText={setInput}
          value={input}
          style={styles.footer_text}
        />
        <Pressable style={styles.button} onPress={() => addMessage()}>
          <Text style={{ color: "white" }}>Add message</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    // backgroundColor: 'grey'
  },
  messages: {
    // backgroundColor: 'red',
    flex: 1,
    textAlign: "center",
    position: "relative",
    padding: 40,
    marginHorizontal: 20,
    // flexGrow: 0
  },
  item: {
    backgroundColor: "grey",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 32,
    height: "5rem",
    textAlign: "center",
    paddingBottom: 10,
    borderColor: "#000000",
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
  },
  button: {
    flexBasis: "25%",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "black",
  },
  footer: {
    height: "5rem",
    flexDirection: "row",
    borderColor: "#000000",
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footer_text: {
    padding: 10,
    backgroundColor: "white",
    flexBasis: "75%",
  },
});

export default MessengerScreen;
