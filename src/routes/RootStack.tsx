import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScene from "../features/home/scenes/HomeScene";
import AuthStack from "./AuthStack";

let Stack = createStackNavigator();

export default function RootStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Auth" component={AuthStack} />
			<Stack.Screen name="TncWebView" component={HomeScene} />
		</Stack.Navigator>
	);
}
