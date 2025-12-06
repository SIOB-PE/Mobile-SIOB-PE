import { Text, View } from "react-native";
import { HomeStyle } from "@/styles/home";
import { Card } from "react-native-paper";
import ItemIncident from "@/components/ItemIncident";

export default function Home() {
  return (
    <View style={HomeStyle.screen}>
      <Card style={HomeStyle.cardTop}>
        <Text style={HomeStyle.militaryName}>Major Silva</Text>
      </Card>

      <Card style={HomeStyle.cardIncidentList}>
        <Text style={HomeStyle.incidentListHeader}>Lista de ocorrências</Text>
        <View>
          <ItemIncident/>
        </View>
      </Card>
    </View>
  );
}
