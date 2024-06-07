/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 10.04.2024
 * Time: 09:38
 */

import React, {useEffect, useState} from 'react';
import {Button, ScrollView, Text, View} from "react-native";
import ReceiptComponent from "./ReceiptComponent";
import {useNavigation} from "@react-navigation/native";
import navigator from "./Navigator";

function PendingReceiptView () {

    const [bills, setBills] = useState<IBill[]>([])
    const navigation = useNavigation()
    useEffect(() => {
        setBills(require("../mockdata.json"))
    }, []);

    const addReceipt = (newReceipt:IBill) => {
        setBills([... bills, newReceipt]);
    }

    const changeView = () => {

        // @ts-ignore
        navigation.navigate("CreateReceipt");
    }

    return (
        <ScrollView>
            {bills.map((bill ) => {
                return <ReceiptComponent key={bill.id} bill={bill} navigation={navigation} />
            })}

            <Button title={"Neue Rechnung Anlegen"} onPress={() => changeView()}/>


        </ScrollView>
    );
};

export default PendingReceiptView;

