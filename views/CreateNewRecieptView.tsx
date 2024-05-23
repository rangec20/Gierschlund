/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 03.05.2024
 * Time: 08:20
 */

import React, {useState} from 'react';
import {Button, Image, Text, TextInput, View} from "react-native";
import navigation from "./Navigator";
import PendingReceiptView from "./PendingReceiptView";

const CreateNewRecieptView = () => {
    const [purposeOfTransfer, setPurposeOfTransfer] = useState<string>("")
    const [transactionPartner, setTransactionPartner] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [dateOfTransfer, setDateOfTransfer] = useState<Date>(new Date())
    // imageUrl

    const [newReciept, setNewReciept] = useState<IBill>()

    const onChangePrice = (text:string) => {
        // Use a regular expression to allow only numbers
        let numericText:string = text.replace(/[^0-9]/g, '')
        if (numericText === ""){
            numericText = "0";
        }
        setPrice(Number.parseInt(numericText));
    };

    const onCreateReceipt = () => {
        setNewReciept({
            id:2,
            purposeOfTransfer: purposeOfTransfer,
            transactionPartner: transactionPartner,
            price: price,
            dateOfTransfer: dateOfTransfer,
            user: "Georg",
            pending: true,
            imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.erento.com%2Fnews%2Fvermieter%2Frechnungen-richtig-schreiben%2F&psig=AOvVaw3sEHyEY1pZfEVMoJYAd6bJ&ust=1716132243085000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCMtPjAl4YDFQAAAAAdAAAAABAJ"
        });

        // PendingReceiptView.addReceipt(newReciept); lol das geht natürlich nicht
    }

    return (
        <View>
            <Text>Details</Text>
            <Text>Verwendungszweck:</Text>
            <TextInput
                value={""}
                onChangeText={text => setPurposeOfTransfer(text)}/>

            <Text>Transaktionspartner:</Text>
            <TextInput onChangeText={text => setTransactionPartner(text)}/>

            <Text>Preis:</Text>
            <TextInput keyboardType={"numeric"} value={price} onChangeText={text => onChangePrice(text)}/>

            <Text>Datum:</Text>
            <TextInput onChangeText={text => setTransactionPartner(text)}/>

            <Text>Bild:</Text>
            {/*TODO: Bild einlesefunktion einfügen (grad kein bock) */}
            {/*TODO: DateTimePicker machen (auch kein bock)*/}

            <Button
                title={"Rechnung Erstellen"}
                onPress={() => onCreateReceipt()}
            />
        </View>
    );
};




export default CreateNewRecieptView;