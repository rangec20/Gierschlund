/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 17.05.2024
 * Time: 15:30
 */

import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const ReceiptDetailView = ({route}) => {
    const receipt:IReceipt = route.params;
    return (
        <View>
            <Text>Details</Text>
            <Text>Verwendungszweck</Text>
            <Text>{receipt.purposeOfTransfer}</Text>

            <Text>Transaktionspartner</Text>
            <Text>{receipt.transactionPartner}</Text>


            <Text>Preis:</Text>
            <Text>{receipt.price}</Text>

            <Text>Datum:</Text>
            <Text>{receipt.dateOfTransfer.toDateString()}</Text>

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