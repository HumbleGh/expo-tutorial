  
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import {BottomTabBar,createBottomTabNavigator,} from "@react-navigation/bottom-tabs";
import { Foundation as Icon } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TabBarAdvancedButton } from "./components/AdvancedTabBarIcon";
import tailwind from "tailwind-rn";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Home from "./screens/Home";


const BottomBar = createBottomTabNavigator();

export default function App() {
	return (

		<NavigationContainer>
			
			<StatusBar />
			<BottomBar.Navigator
				tabBar={(props) => (
					<View style={styles.navigatorContainer}>
						<BottomTabBar {...props} />
							<View
								style={[
									styles.xFillLine,
									{
										...tailwind("bg-gray-100"),
									},
								]}
							/>
					</View>
				)}
				tabBarOptions={{
					showIcon: false,
					style: styles.navigator,
					tabStyle: {
						...tailwind("bg-gray-100"),
					},
				}}
			>

				 <BottomBar.Screen
					name="Home"
					component={Login}
					options={{
						tabBarIcon: ({ color, focused }) => (
							<Icon
								name="home"
								size={24}
								color={focused ? "orange" : "gray"}
							/>
						),
						headerShown: false,
						tabBarShowLabel: false,
					}}
				/>
				<BottomBar.Screen
					name="Mic"
					component={Home}
					options={{
						tabBarIcon: ({ color, focused }) => (
							<TabBarAdvancedButton
								name="home"
								size={24}
								color={focused ? "orange" : "gray"}
							/>
						),
						headerShown: false,
						tabBarShowLabel: false,
					}}
				/>
				<BottomBar.Screen
					name="Cart"
					component={Cart}
					options={{
						tabBarIcon: ({ color, focused }) => (
							<MaterialCommunityIcons
								name="shopping"
								size={24}
								color={focused ? "orange" : "gray"}
							/>
						),
						headerShown: false,
						tabBarShowLabel: false,
					}}
				/>
			</BottomBar.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		marginTop: Constants.statusBarHeight,
		fontFamily: "Cereal-Regular",
	},
	navigator: {
		backgroundColor: "transparent",
		elevation: 30,
	},
	xFillLine: {
		position: "absolute",
		height: 34,
	},
	navigatorContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		shadowColor: "#000",
		shadowOffset: {
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
	},


});
