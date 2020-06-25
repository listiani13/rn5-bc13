import React, { createContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthContext, { useAuth } from "./helpers/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./routes/RootStack";

export default function App() {
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
}

function FeatureA({}: {}) {
	return <ComponentB />;
}

// ComponentB.tsx
function ComponentB({}: {}) {
	let authCtx = useAuth();
	return (
		<View>
			<Text>{authCtx.token}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
