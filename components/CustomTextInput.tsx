import { StyleProp, TextStyle } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
	label: string;
	style?: StyleProp<TextStyle>;
	placeholder?: string;
}

export default function CustomTextInput({label, style, placeholder}: Props){
	return(
		<TextInput label={label} placeholder={placeholder} activeOutlineColor="#8f0404" mode="outlined" style={style}/>
	);
}