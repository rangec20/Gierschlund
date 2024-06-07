/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 10.04.2024
 * Time: 09:28
 */

import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import PendingReceiptView from "./PendingReceiptView"
import PaidReceiptView from "./PaidReceiptView";
import CreateNewRecieptView from "./CreateNewRecieptView";
import ReceiptDetailView from "./ReceiptDetailView";
import {StyleSheet, Image, View} from "react-native";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

function Hometabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Offen"} component={PendingReceiptView} options={{
                tabBarLabel: "Offene Rechnungen",
                tabBarIcon: () => (
                    <Image source={require("../assets/BillIcon.png")} style={{width: 40, height: 40}}/>
                )
            }}/>
            <Tab.Screen name={"Geschlossen"} component={PaidReceiptView}/>
        </Tab.Navigator>
    )
}

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={Hometabs}/>
                <Stack.Screen name={"CreateReceipt"} component={CreateNewRecieptView}/>
                <Stack.Screen name={"Details"} component={ReceiptDetailView}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;