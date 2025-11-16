import * as React from "react";
import { router } from "expo-router";
import { Button, Card, Checkbox, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { loginStyles } from "../styles/login";
import { View, Image } from "react-native";

export default function SignIn() {
  const handleLogin = () => {
    router.navigate("/Home");
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
          <View style={{ marginTop: 40 }}>
            <View style={{ marginBottom: 40 }}>
              <Text variant="labelLarge">Digite a sua matrícula</Text>
              <TextInput label={"Matrícula"} />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text variant="labelLarge">Digite a sua senha</Text>
              <TextInput
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
                label={"Senha"}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 40
              }}
            >
              <Text variant="bodyMedium">Lembre-se de mim</Text>
              <Checkbox status="checked" />
            </View>
          </View>
          <View>
            <Button mode="contained" onPress={handleLogin}>
              Entrar
            </Button>
          </View>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}
