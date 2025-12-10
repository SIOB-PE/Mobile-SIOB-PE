import { Card, Button } from "react-native-paper";
import { ScrollView, Text, View } from "react-native";
import { EditIncidentStyle } from "@/styles/editIncident";
import CustomTextInput from "@/components/CustomTextInput";
import { router } from "expo-router";


export default function EditIncident() {

  const handleUpdate = () => {
    router.navigate("/Home");
  }

  return (
    <View style={EditIncidentStyle.screen}>

      <ScrollView>
        <Card style={EditIncidentStyle.card}>
          <Text style={EditIncidentStyle.header}> Editar ocorrencia</Text>

          <CustomTextInput label="Diretoria" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Viatura Empregada" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Número do Aviso" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Número da Viatura" style={EditIncidentStyle.textInput} />
          
          <CustomTextInput label="Cód. Local Ocorrência" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Grupamento" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Data/Hora Acionamento" style={EditIncidentStyle.textInput} placeholder="DD/MM/AAAA HH:mm" />
          <CustomTextInput label="Ponto Base" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Forma de Acionamento" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Local de Acionamento" style={EditIncidentStyle.textInput} />
          
          <CustomTextInput label="Região" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="AIS" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Município" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Bairro" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Tipo de Logradouro" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Logradouro" style={EditIncidentStyle.textInput} />
          
          <CustomTextInput label="Tipo Natureza Ocorrência" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Subgrupo Ocorrência" style={EditIncidentStyle.textInput} />
          <CustomTextInput label="Situação Ocorrência" style={EditIncidentStyle.textInput} />

          <Button onPress={handleUpdate} mode="contained" style={EditIncidentStyle.button}>
            Atualizar
          </Button>
        </Card>
      </ScrollView>
    </View>
  );
}
