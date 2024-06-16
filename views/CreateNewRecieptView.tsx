/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 03.05.2024
 * Time: 08:20
 */

import React, {useState} from 'react';
import {
    Button,
    Image,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import navigation from "./Navigator";
import PendingReceiptView from "./PendingReceiptView";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";
import navigator from "./Navigator";

const CreateNewRecieptView = () => {
    const [purposeOfTransfer, setPurposeOfTransfer] = useState<string>("")
    const [transactionPartner, setTransactionPartner] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [dateOfTransfer, setDateOfTransfer] = useState<Date>(new Date())
    const [showPicker, setShowPicker] = useState<boolean>(false)
    // imageUrl
    const navigation = useNavigation<undefined>()

    const [debugtext, setDebugtext] = useState()

    const onChangePrice = (text: string) => {
        let numericText: string = text.replace(/[^0-9]/g, '')
        if (numericText === "") {
            numericText = "0";
        }
        setPrice(Number.parseInt(numericText));
    };

    const toggleDatepicker = () => {
        setShowPicker(!showPicker)
        console.log("oida wos")
    }

    // @ts-ignore
    const onChangeDate = ({type}, selectedDate) => {
        // nicht mehr berühren: ich weiß nicht was ich gemacht hab aber es geht
        if (type == "set") {
            const currentDate = selectedDate;
            setDateOfTransfer(new Date(currentDate))

            if (Platform.OS === "android") {
                toggleDatepicker();
            }
        } else {
            toggleDatepicker();
        }
    }

    const formatDate = (rawDate: string, forRequest: boolean) => {
        let date = new Date(rawDate)

        let year = date.getFullYear();
        let month: string | number = date.getMonth() + 1;
        let day: string | number = date.getDate();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        if (!forRequest)
            return `${day}.${month}.${year}`
        else
            return `${year}-${month}-${day}`
    }

    const onCreateReceipt = async () => {
        let localhostadress: string = ""
        if (Platform.OS === "web")
            localhostadress = "localhost"
        else if (Platform.OS === "android")
            localhostadress = "10.0.2.2"

        const receiptData = {
            purposeOfTransfer: purposeOfTransfer,
            transactionPartner: transactionPartner,
            price: price,
            dateOfTransfer: formatDate(dateOfTransfer.toString(), true),
            imageUrl:
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.erento.com%2Fnews%2Fvermieter%2Frechnungen-richtig-schreiben%2F&psig=AOvVaw3sEHyEY1pZfEVMoJYAd6bJ&ust=1716132243085000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCMtPjAl4YDFQAAAAAdAAAAABAJ",
            creatorUser:
                {
                    appuserId: 1
                }
            ,
            household: {
                householdId: 1
            }
        };


        await axios.post(`http://${localhostadress}:8080/receipt`, receiptData)
            .then(response => console.log("sent POST"))
            .catch(error => console.error(error))


        navigation.goBack();
    }


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Verwendungszweck:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setPurposeOfTransfer(text)}/>

            <Text style={styles.text}>Transaktionspartner:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setTransactionPartner(text)}/>

            <Text style={styles.text}>Preis:</Text>
            <TextInput
                style={styles.input}
                keyboardType={"numeric"}
                value={price.toString()}
                onChangeText={text => onChangePrice(text)}/>

            <Text style={styles.text}>Datum:</Text>

            {showPicker && (
                <DateTimePicker
                    mode={"date"}
                    display={"spinner"}
                    value={new Date(dateOfTransfer)}
                    onChange={onChangeDate}
                />
            )}

            {!showPicker && (
                <Pressable onPress={toggleDatepicker}>

                    <TextInput
                        style={styles.input}
                        value={formatDate(dateOfTransfer.toString(), false)}
                        onChangeText={setDateOfTransfer}
                        editable={false}/>
                </Pressable>
            )}

            <Text style={styles.text}>Bild:</Text>
            {/*TODO: Bild einlesefunktion einfügen (grad kein bock) */}

            <TouchableOpacity
                style={styles.button}
                onPress={() => onCreateReceipt()}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <Text>hilfe: {debugtext}</Text>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
        color: '#333',
    },
    input: {
        width: '100%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        backgroundColor: '#fff',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    button: {
        backgroundColor: '#96989b',
        padding: 12,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CreateNewRecieptView;