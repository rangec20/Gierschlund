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
        <Pressable style={styles.component} onPress={changeView}>
            <View style={styles.row}>
                <Text style={styles.label}>Purpose:</Text>
                <Text style={styles.value}>{receipt.purposeOfTransfer}</Text>
            </View>
            {/*<View style={styles.row}>*/}
            {/*    <Text style={styles.label}>Partner:</Text>*/}
            {/*    <Text style={styles.value}>{receipt.transactionPartner}</Text>*/}
            {/*</View>*/}
            <View style={styles.row}>
                <Text style={styles.label}>Price:</Text>
                <Text style={styles.value}>${receipt.price.toFixed(2)}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>User:</Text>
                <Text style={styles.value}>{receipt.creatorUser.username}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    component: {
        backgroundColor: '#f8f8f8',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
        elevation: 2,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#555',
    },
    value: {
        fontSize: 14,
        color: '#333',
    },
});
export default ReceiptComponent;