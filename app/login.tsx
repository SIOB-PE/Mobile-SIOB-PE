import * as React from "react";
import { router } from "expo-router";
import { Button, Card, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { loginStyles } from "../styles/login";
import { View, Image } from "react-native";

export default function SignIn() {
  const handleLogin = () => {
    router.replace("/Home");
  };
  return (
    <SafeAreaView style={loginStyles.screen}>
      <View>
        <Text style={loginStyles.header} variant="displayLarge">
          Bem vindo ao SIOB-PE
        </Text>
      </View>
      <View style={loginStyles.viewImage}>
        <Image
          style={loginStyles.image}
          source={require("../assets/images/Grupo 5.png")}
        />
      </View>
      <Card style={loginStyles.card}>
        <Card.Content>
          <Text style={loginStyles.loginHeader}>Faça seu login</Text>
          <Button mode="contained" onPress={handleLogin}>
            Testando telas
          </Button>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}
