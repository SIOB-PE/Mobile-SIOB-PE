import React from "react";
import { Card } from "react-native-paper";
import { Pressable, Text, View } from "react-native";
import { ItemIncidentStyle } from "@/styles/itemIncident";

type todoItemProps = {
  showModal: () => void;
};

export default function ItemIncident({showModal}: todoItemProps) {
  return (
    <Pressable onPress={showModal}>
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
