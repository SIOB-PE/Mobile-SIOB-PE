import { StyleProp, TextStyle } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
	label: string;
	style?: StyleProp<TextStyle>;
}

export default function CustomTextInput({label, style}: Props){
	return(
		<TextInput label={label} activeOutlineColor="#8f0404" mode="outlined" style={style}/>
	);
}