import React from "react";
import { View, Text, Button } from "react-native";
import {
	useNavigation,
	CompositeNavigationProp,
} from "@react-navigation/native";
import { StackScreenProps, StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList, RootStackParamList } from "../../../routes/types";
import { Screen } from "../../../routes/routeList";

// type Navigation = StackNavigationProp<AuthStackParamList, Screen.LOGIN>;
type Navigation = CompositeNavigationProp<
	// Current Stack
	StackNavigationProp<AuthStackParamList, Screen.LOGIN>,
	// Root Parent
	StackNavigationProp<RootStackParamList>
>;
export default function LoginScene() {
	let { navigate } = useNavigation<Navigation>();
	return (
		<View>
			<Text>LoginScene</Text>
			<Button
				title="Go To Sign Up"
				onPress={() => navigate("TncWebView")}
			></Button>
		</View>
	);
}
