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

    const [receipts, setReceipts] = useState<IReceipt[]>([])
    const navigation = useNavigation()
    useEffect(() => {
        setReceipts(require("../mockdata.json"))
    }, []);

    const addReceipt = (newReceipt:IReceipt) => {
        setReceipts([... receipts, newReceipt]);
    }

    return (
        <ScrollView>
            {receipts.map((receipt ) => {
                return <ReceiptComponent key={receipt.id} receipt={receipt} navigation={navigation} />
            })}

            <Button title={"Neue Rechnung Anlegen"} onPress={() => navigation.navigate("CreateReceipt")}/>


        </ScrollView>
    );
};

export default PendingReceiptView;

