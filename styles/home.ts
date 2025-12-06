import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
	screen: {
		backgroundColor: "#A71414",
		flex: 1,
		marginTop: 35
	},

	cardTop: {
		marginBottom: 30,
		borderRadius: 0,
		alignItems: "flex-end",
		backgroundColor: "#fff"
	},

	militaryName: {
		fontSize: 20,
		margin: 15
	},

	incidentListHeader: {
		textAlign: "center",
		margin: 30,
		fontSize: 15
	},
	
	cardIncidentList: {
		marginHorizontal: 10
	}
});