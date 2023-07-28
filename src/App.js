import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions } from "react-native";
import { Icon, NativeBaseConfigProvider } from "native-base"; // Import the Icon component from native-base

const LoginScreen = ({ navigation }) => {
  return (
    <NativeBaseConfigProvider>
      <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require("./images/background.png")}
          style={{
            height: Dimensions.get("window").height / 2.5,
          }}
        >
          <View>
            <Icon name="location-sharp" style={{ color: "#ffffff", fontSize: 100 }} />
            <Text>Vision Go</Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </NativeBaseConfigProvider>
  );
};

export default LoginScreen;
