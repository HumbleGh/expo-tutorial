import React from "react";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from "react-native";
import tailwind from "tailwind-rn";
import Icon from "react-native-vector-icons/AntDesign";
import AntDesign from "react-native-vector-icons/AntDesign";


export default function Login() {
	return (
		<SafeAreaView
			style={tailwind(
				"h-full w-full flex flex-col justify-center items-center bg-white px-6"
			)}
		>
			<View style={tailwind("flex flex-col items-center w-full")}>
				<Image
					source={require("../assets/images/car1.jpg")}
					style={{
						...tailwind("h-56 w-56 rounded-2xl"),
						transform: [{ rotate: "45deg" }],
					}}
				/>

				<Text style={tailwind("mt-16 text-3xl")}>Welcome to</Text>

				<Text style={tailwind("mt-2 text-4xl font-bold")}>
					Power Car Shop
				</Text>

				<View
					style={tailwind(
						"flex flex-col items-center w-full mt-8 px-5"
					)}
				>
					<TouchableOpacity
						style={tailwind(
							"bg-gray-100 w-full items-center rounded-xl py-4"
						)}
					>
						<View style={tailwind("items-center flex flex-row")}>
							<Icon name="google" size={25} color="#900" />
							<Text style={tailwind("text-lg font-bold ml-2")}>
								Login with Gmail
							</Text>
						</View>
					</TouchableOpacity>

                    <TouchableOpacity
             onPress={() => {
                navigation.navigate("Home");
            }}
            activeOpacity={0.8}
           style={{ 
            backgroundColor: "black", 
            padding: 10, 
            paddingHorizontal: 60,
            flexDirection: "row",
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 20,
            
            }} >
           
            <AntDesign name="apple1" size={24} color="white" /> 
             <Text style={{fontSize: 20,
                            color: "white",
                            marginLeft: 15,
                        }} >Login with Apple</Text>
         </TouchableOpacity>
         
					<View style={tailwind("flex flex-row mt-4")}>
						<Text style={tailwind("text-gray-500")}>
							Not a member?
						</Text>
						<Text style={tailwind("font-bold text-yellow-500")}>
							{" "}
							Sign Up
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
