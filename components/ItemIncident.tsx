import React from "react";
import { Card } from "react-native-paper";
import { Pressable, Text, View } from "react-native";
import { ItemIncidentStyle } from "@/styles/itemIncident";
import { router } from "expo-router";


export default function ItemIncident() {

  const redirectToIncidentScreen = () => {
    router.navigate("/EditIncident");
  }
  return (
    <Pressable onPress={redirectToIncidentScreen}>
      <Card style={ItemIncidentStyle.card}>
        <Text style={ItemIncidentStyle.titleIncident}>
          Incêndio residêncial
        </Text>
        <View style={ItemIncidentStyle.rowBodyTextIncident}>
          <Text style={ItemIncidentStyle.bodyTextIncident}>Rua Boa viagem</Text>
          <Text style={ItemIncidentStyle.bodyTextIncident}>Boa viagem</Text>
        </View>
      </Card>
    </Pressable>
  );
}
