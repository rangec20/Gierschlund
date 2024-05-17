/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 10.04.2024
 * Time: 10:30
 */

import React from 'react';
import {StyleSheet, Text, View} from "react-native";

interface BillComponentProps {
    receipt: IReceipt
}

const BillComponent: React.FC<BillComponentProps> = ({receipt}) => {
    return (
        <View style={styles.component}>
            <Text style={styles.text}>{receipt.purposeOfTransfer} {receipt.transactionPartner}</Text>
            <Text style={styles.text}>{receipt.price} {receipt.creatorUser.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    component:{
        margin: 20,
        padding: 20,
        backgroundColor: "#E4E6EB",
        borderColor: "#242526",
        borderWidth: 5,
        borderRadius: 20
    },
    text:{
        fontSize: 20,
        //color: "#E4E6EB"
    }
})
export default BillComponent;