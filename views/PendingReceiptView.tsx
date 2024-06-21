/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 10.04.2024
 * Time: 09:38
 */

import React, {useEffect, useState} from 'react';
import {Button, Platform, ScrollView, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import ReceiptComponent from "./ReceiptComponent";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import navigator from "./Navigator";
import axios from "axios";

function PendingReceiptView() {

    const [receipts, setReceipts] = useState<IReceipt[]>([])
    const navigation = useNavigation()
    const householdId = 1

    const isFocused = useIsFocused();


    useEffect(() => {
        if (Platform.OS == "web") {
            axios.get(`http://localhost:8080/receipt/${householdId}?completed=false`)
                .then(response => {
                    setReceipts(response.data as IReceipt[]);
                })
        } else if (Platform.OS == "android") {
            axios.get(`http://10.0.2.2:8080/appuser?completed=false`)
                .then(response => {
                    setReceipts(response.data as IReceipt[]);
                })
        }
    }, [isFocused]);

    const addReceipt = (newReceipt: IReceipt) => {
        setReceipts([...receipts, newReceipt]);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {receipts.map((receipt) => {
                return <ReceiptComponent key={receipt.receiptId} receipt={receipt} navigation={navigation}/>
            })}

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate("CreateReceipt")}
            >
                <Text style={styles.buttonText}>Neue Rechnung Anlegen</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    buttonContainer: {
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        overflow: 'hidden',
    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: '#fff',
    }
});
export default PendingReceiptView;

