/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 17.05.2024
 * Time: 15:30
 */

import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const ReceiptDetailView = ({route}) => {
    const reciept:IBill = route.params;
    return (
        <View>
            <Text>Details</Text>
            <Text>Verwendungszweck</Text>
            <Text>{reciept.purposeOfTransfer}</Text>

            <Text>Transaktionspartner</Text>
            <Text>{reciept.transactionPartner}</Text>


            <Text>Preis:</Text>
            <Text>{reciept.price}</Text>

            <Text>Datum:</Text>
            <Text>{reciept.dateOfTransfer}</Text>

            <Text>Bild:</Text>
            <Image style={styles.image}
                source={{uri: reciept.imageUrl}}></Image>


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