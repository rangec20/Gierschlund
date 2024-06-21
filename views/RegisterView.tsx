import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Platform} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from "axios/index";

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;


};

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterView: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');

    const handleRegister = () => {

        const userData = {
            username: username,
            email: email,
            password: password,
            createdReceipts: [],
            completedReceipts: [],
            householdusers: []
        };

        if (Platform.OS == "web") {
            axios.post(`http://localhost:8080/appuser`, userData)
                .then(response => {

                })
        } else if (Platform.OS == "android") {
            axios.post(`http://10.0.2.2:8080/appuser`, userData)
                .then(response => {

                })
        }

        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Register" onPress={handleRegister} />
            <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
});

export default RegisterView;
