import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { HomeStyle } from "@/styles/home";
import { Card } from "react-native-paper";
import ItemIncident from "@/components/ItemIncident";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Home() {

  return (
    <View style={HomeStyle.screen}>
      <ScrollView>
        <Card style={HomeStyle.cardTop}>
          <Text style={HomeStyle.militaryName}>Major Silva</Text>
        </Card>

        <Card style={HomeStyle.cardIncidentList}>
          <Text style={HomeStyle.incidentListHeader}>Lista de ocorrências</Text>
          <View style={HomeStyle.rowSearch}>
            <TextInput
              style={HomeStyle.textInput}
              placeholder="Buscar ocorrência"
            />
            <Pressable
              onPress={() => {
                console.log("Pressionado");
              }}
              style={HomeStyle.pressable}
            >
              <FontAwesome name="search" size={24} color="black" />
            </Pressable>
          </View>
          <View>
            <ItemIncident/>
            <ItemIncident/>
            <ItemIncident/>
            <ItemIncident/>
            <ItemIncident/>
            <ItemIncident/>
            <ItemIncident/>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}
