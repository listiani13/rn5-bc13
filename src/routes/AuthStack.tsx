import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScene from "../features/home/scenes/HomeScene";
import LoginScene from "../features/auth/scenes/LoginScene";
import { Screen } from "./routeList";
import SignUpScene from "../features/auth/scenes/SignUpScene";
import SignUpOneScene from "../features/auth/scenes/SignUpOneScene";
import SignUpTwoScene from "../features/auth/scenes/SignUpTwoScene";

let Stack = createStackNavigator();

export default function AuthStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name={Screen.LOGIN} component={LoginScene} />
			<Stack.Screen name={Screen.REGISTER} component={RegisterStack} />
		</Stack.Navigator>
	);
}

let RegisterStackNavigator = createStackNavigator();

function RegisterStack() {
	return (
		<RegisterStackNavigator.Navigator>
			<RegisterStackNavigator.Screen
				name={Screen.REGISTER_STEP_ONE}
				component={SignUpOneScene}
			/>
			<RegisterStackNavigator.Screen
				name={Screen.REGISTER_STEP_TWO}
				component={SignUpTwoScene}
			/>
		</RegisterStackNavigator.Navigator>
	);
}
