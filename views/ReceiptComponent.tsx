/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 10.04.2024
 * Time: 10:30
 */

import React from 'react';
import {Pressable, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View} from "react-native";

interface ReceiptComponentProps {
    receipt: IReceipt
    navigation: any
}

const ReceiptComponent: React.FC<ReceiptComponentProps> = ({receipt, navigation}) => {

    const changeView = () => {
        navigation.navigate("Details", receipt)
    }

    return (
            <Pressable style={styles.component} onPress={() => changeView()}>
                <Text style={styles.text}>{receipt.purposeOfTransfer} {receipt.transactionPartner}</Text>
                <Text style={styles.text}>{receipt.price} {receipt.creatorUser.name}</Text>
            </Pressable>
    );
};


const styles = StyleSheet.create({
    component:{
        margin: 20,
        padding: 20,
        backgroundColor: "grey",
        borderColor: "black",
        borderWidth: 10,
        borderRadius: 200
    },
    text:{
        fontSize: 20
    }
})
export default ReceiptComponent;