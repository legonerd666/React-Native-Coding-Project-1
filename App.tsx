import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.helloworld}>
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  helloworld: {
    width: 200,
    height: 200,
    backgroundColor: "#00ddfa",
    alignItems: "center",
    justifyContent: "center",
  },
});
