import React, { useState } from "react";
import { router } from "expo-router";
import { Button, Card, Checkbox, Text, TextInput } from "react-native-paper";
import { loginStyles } from "../../styles/login";
import { View, Image, ScrollView } from "react-native";

export default function Login() {
  const handleLogin = () => {
    router.replace("/Home");
  };

  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(true);

  return (
    <View style={loginStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View>
          <Text style={loginStyles.header} variant="displayLarge">
            Bem vindo ao SIOB-PE
          </Text>
        </View>
        <View style={loginStyles.viewImage}>
          <Image
            style={loginStyles.image}
            source={require("../../assets/images/Grupo 5.png")}
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
                  secureTextEntry={!visible}
                  right={
                    <TextInput.Icon
                      icon={visible ? "eye" : "eye-off"}
                      onPress={() => {
                        setVisible(!visible);
                      }}
                    />
                  }
                  label={"Senha"}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 40,
                }}
              >
                <Text variant="bodyMedium">Lembre-se de mim</Text>
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>
            </View>
            <View>
              <Button mode="contained" onPress={handleLogin}>
                Entrar
              </Button>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}
