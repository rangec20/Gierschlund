import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from "axios";

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    HouseholdSelection: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginView: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loggedInUser, setLoggedInUser] = useState<IUser>();

    const handleLogin = () => {
        axios.get(`http://localhost:8080/appuser?email=${email}`)
            .then(response => {
                var user: IUser = response.data as IUser;

                if (password == user.password){
                    setLoggedInUser(user);
                    navigation.navigate('HouseholdSelection', { loggedInUser: user });
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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
            <Button title="Login" onPress={handleLogin} />
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
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

export default LoginView;
