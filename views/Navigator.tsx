import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import PendingReceiptView from "./PendingReceiptView";
import PaidReceiptView from "./PaidReceiptView";
import CreateNewRecieptView from "./CreateNewRecieptView";
import ReceiptDetailView from "./ReceiptDetailView";
import LoginView from "./LoginView";
import RegisterView from "./RegisterView";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Hometabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Offen"} component={PendingReceiptView} options={{
                tabBarLabel: "Offene Rechnungen",
                tabBarIcon: () => (
                    <Image source={require("../assets/BillIcon.png")} style={{ width: 40, height: 40 }} />
                )
            }} />
            <Tab.Screen name={"Geschlossen"} component={PaidReceiptView} />
        </Tab.Navigator>
    );
}

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name={"Login"} component={LoginView} options={{ headerShown: false }} />
                <Stack.Screen name={"Register"} component={RegisterView} options={{ headerShown: false }} />
                <Stack.Screen name={"Home"} component={Hometabs} options={{ headerShown: false }} />
                <Stack.Screen name={"CreateReceipt"} component={CreateNewRecieptView} />
                <Stack.Screen name={"Details"} component={ReceiptDetailView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
