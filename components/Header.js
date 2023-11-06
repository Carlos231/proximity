import { StyleSheet, Text, View, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: "white" }}>Go Home</Text>
      </Pressable>
      <Text style={styles.header}>Proximity</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Messenger")}
      >
        <Text style={{ color: "white" }}>Go to messenger</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    fontSize: 32,
    height: "5rem",
    textAlign: "center",
    paddingBottom: 10,
    borderColor: "#000000",
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    width: "100rem",
  },
  button: {
    flexBasis: "25%",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "black",
  },
});

export default Header;
