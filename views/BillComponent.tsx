/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 10.04.2024
 * Time: 10:30
 */

import React from 'react';
import {StyleSheet, Text, View} from "react-native";

interface BillComponentProps {
    bill: IBill
}

const BillComponent: React.FC<BillComponentProps> = ({bill}) => {
    return (
        <View style={styles.component}>
            <Text style={styles.text}>{bill.purposeOfTransfer} {bill.transactionPartner}</Text>
            <Text style={styles.text}>{bill.price} {bill.user}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    component:{
        margin: 20,
        padding: 20,
        backgroundColor: "grey",
        borderColor: "tomato",
        borderWidth: 10,
        borderRadius: 200
    },
    text:{
        fontSize: 20
    }
})
export default BillComponent;