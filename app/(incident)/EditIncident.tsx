import { Card } from "react-native-paper";
import { ScrollView, Text, View } from "react-native";
import { EditIncidentStyle } from "@/styles/editIncident";
import CustomTextInput from "@/components/CustomTextInput";


export default function EditIncident() {
  return (
    <View style={EditIncidentStyle.screen}>
      <ScrollView>
        <Card style={EditIncidentStyle.card}>
          <Text style={EditIncidentStyle.header}> Editar ocorrencia</Text>
          <CustomTextInput label="Test" style={EditIncidentStyle.textInput}/>
        </Card>
      </ScrollView>
    </View>
  );
}
