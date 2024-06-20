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
        <View style={styles.container}>
            <View style={styles.detailRow}>
                <Text style={styles.label}>Verwendungszweck</Text>
                <Text style={styles.value}>{receipt.purposeOfTransfer}</Text>
            </View>

            <View style={styles.detailRow}>
                <Text style={styles.label}>Transaktionspartner</Text>
                <Text style={styles.value}>{receipt.transactionPartner}</Text>
            </View>

            <View style={styles.detailRow}>
                <Text style={styles.label}>Preis</Text>
                <Text style={styles.value}>{receipt.price}</Text>
            </View>

            <View style={styles.detailRow}>
                <Text style={styles.label}>Datum</Text>
                <Text style={styles.value}>{receipt.dateOfTransfer}</Text>
            </View>

            <View style={styles.imageContainer}>
                <Text style={styles.label}>Bild</Text>
                <Image style={styles.image} source={{ uri: receipt.imageUrl }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    value: {
        fontSize: 16,
        color: '#666666',
    },
    imageContainer: {
        marginTop: 16,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 8,
    },
});


export default ReceiptDetailView;