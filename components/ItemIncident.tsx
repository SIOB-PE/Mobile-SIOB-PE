import React from "react";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";
import { ItemIncidentStyle } from "@/styles/itemIncident";

export default function ItemIncident() {
  return (
    <Card style={ItemIncidentStyle.card}>
      <Text style={ItemIncidentStyle.titleIncident}>Incêndio residêncial</Text>
      <View style={ItemIncidentStyle.rowBodyTextIncident}>
        <Text style={ItemIncidentStyle.bodyTextIncident}>Rua Boa viagem</Text>
        <Text style={ItemIncidentStyle.bodyTextIncident}>Boa viagem</Text>
      </View>
    </Card>
  );
}
