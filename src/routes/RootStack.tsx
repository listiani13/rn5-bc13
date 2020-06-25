import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScene from "../features/home/scenes/HomeScene";

let Stack = createStackNavigator();

export default function RootStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScene} />
		</Stack.Navigator>
	);
}
