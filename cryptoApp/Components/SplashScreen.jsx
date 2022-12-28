import { Text, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
import {useRef} from 'react';

const SplashScreen = () => {
  const animation = useRef(null);

  return (
    <View style={styles.animationContainer}>
      <LinearGradient
        colors={["#265955", "green"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          height: "100%",
          opacity: 0.2,
        }}
      />
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../assets/splash4.json")}
      />
      <Text style={{ fontSize: 22, fontFamily: "PoppinsBold", color: '#019D91' }}>Crypto Labs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});


export default SplashScreen;
