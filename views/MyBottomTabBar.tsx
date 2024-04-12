/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 10.04.2024
 * Time: 09:28
 */

import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PendingBillView from "./PendingBillView"
import PaidBillView from "./PaidBillView";
import {StyleSheet, Image} from "react-native";

const MyBottomTabBar = () => {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name={"Offen"} component={PendingBillView} options={{
                tabBarLabel: "Offene Rechnungen",
                tabBarIcon: () => (
                    <Image source={require("../assets/BillIcon.png")} style={{width:40, height:40}}/>
                )
            }}/>
            <Tab.Screen name={"Geschlossen"} component={PaidBillView}/>
        </Tab.Navigator>
    );
};


export default MyBottomTabBar;