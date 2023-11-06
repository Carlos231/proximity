import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import Header from "./Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.hello_world_text}>Hello World!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    // backgroundColor: 'grey'
  },
  hello_world_text: {
    color: "black",
    // color: "white"
  },
});

export default HomeScreen;
