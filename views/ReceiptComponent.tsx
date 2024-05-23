/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 10.04.2024
 * Time: 10:30
 */

import React from 'react';
import {Pressable, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View} from "react-native";

interface BillComponentProps {
    bill: IBill
    navigation: any
}

const ReceiptComponent: React.FC<BillComponentProps> = ({bill, navigation}) => {

    const changeView = () => {
        navigation.navigate("Details", bill)
    }

    return (
            <Pressable style={styles.component} onPress={() => changeView()}>
                <Text style={styles.text}>{bill.purposeOfTransfer} {bill.transactionPartner}</Text>
                <Text style={styles.text}>{bill.price} {bill.user}</Text>
            </Pressable>
    );
};

const styles = StyleSheet.create({
    component: {
        margin: 16,
        padding: 16,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        alignItems: 'center', // Center content horizontally
    },
    text: {
        fontSize: 16,
        color: "#333",
        marginBottom: 4,
        textAlign: 'center', // Center text horizontally
    }
});

export default ReceiptComponent;