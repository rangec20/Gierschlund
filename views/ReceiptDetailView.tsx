/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 17.05.2024
 * Time: 15:30
 */

import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

// @ts-ignore
const ReceiptDetailView = ({route}) => {
    const receipt:IReceipt = route.params;
    return (
        <View>
            <Text>Verwendungszweck</Text>
            <Text>{receipt.purposeOfTransfer}</Text>

            <Text>Transaktionspartner</Text>
            <Text>{receipt.transactionPartner}</Text>


            <Text>Preis:</Text>
            <Text>{receipt.price}</Text>

            <Text>Datum:</Text>
            <Text>{receipt.dateOfTransfer}</Text>

            <Text>Bild:</Text>
            <Image style={styles.image}
                source={{uri: receipt.imageUrl}}></Image>


        </View>
    );
};


const styles = StyleSheet.create({
    image: {
        width: 500,
        height: 500,
    },
});

export default ReceiptDetailView;