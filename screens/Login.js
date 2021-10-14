import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import { AntDesign} from '@expo/vector-icons';




export default function Login() {
    return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
        <Image 
            style={{
                width: 200,
                height: 200,
                borderRadius: 10,
                marginBottom: 50,
                borderRadius: 20,            
                transform: [{rotate: "45deg"}]
            }}
        source={require("../assets/girls.jpg")} 
    />
        <Text style={{  color: "rgba(0,0,0,0.6)", fontSize: 24}}>Welcome to</Text>
        <Text style={{color: "black", fontSize: 30, fontWeight: "600" }} > 
          Power Bike Shop
        </Text>
        <Pressable
         android_ripple
         onPress={() => {
             alert("Hi")
         }}
        // <TouchableOpacity 
           style={{ 
            backgroundColor: "#e3e3e3", 
            padding: 10, 
            paddingHorizontal: 60,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            
            }} >
            <AntDesign name="google" size={24} color="rgb(256, 10, 10)" /> 
             <Text style={{fontSize: 17, marginLeft: 15,
                        }} >Login with Gmail
                        </Text>
                    </Pressable>
         {/* </TouchableOpacity> */}

         <TouchableOpacity 
            onPress={() => {
                navigation.navigate("Home")
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
        
        <TouchableOpacity>
         <Text style={{color: "grey", marginTop: 10, fontWeight: "500"}} > 
             Not a member? 
            <Text style={{color: 'orange', fontWeight: "bold"}} > Signup </Text>
            </Text>
        </TouchableOpacity>
    </View>
    );
}