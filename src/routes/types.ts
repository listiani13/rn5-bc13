import { Screen } from "./routeList";

type NestedNavigator<T> = { screen: keyof T; params?: T[keyof T] };
export type RootStackParamList = {
	Auth: NestedNavigator<AuthStackParamList>;
	TncWebView: undefined;
};

export type AuthStackParamList = {
	[Screen.LOGIN]: undefined;
	[Screen.REGISTER]: NestedNavigator<RegisterStackParamList>;
};

type RegisterStackParamList = {
	[Screen.REGISTER_STEP_ONE]: undefined;
	[Screen.REGISTER_STEP_TWO]: undefined;
};
