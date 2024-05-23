/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 17.05.2024
 * Time: 15:30
 */

import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

const ReceiptDetailView = ({route}) => {
    const receipt: IBill = route.params;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Receipt Details</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Purpose of Transfer</Text>
                <Text style={styles.value}>{receipt.purposeOfTransfer}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Transaction Partner</Text>
                <Text style={styles.value}>{receipt.transactionPartner}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Price</Text>
                <Text style={styles.value}>{receipt.price}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Date of Transfer</Text>
                <Text style={styles.value}>{receipt.dateOfTransfer}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Image</Text>
                <Image style={styles.image} source={{ uri: receipt.imageUrl }} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
        textAlign: 'center',
    },
    detailContainer: {
        marginBottom: 16,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
        color: '#555',
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 8,
        marginTop: 8,
    },
});

export default ReceiptDetailView;