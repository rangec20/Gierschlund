import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const HouseholdSelectionView = ({ route }) => {
    const { loggedInUser } = route.params;
    const [households, setHouseholds] = useState<IHousehold[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        // Fetch the households for the logged-in user
        axios.get(`http://localhost:8080/appuser/findHouseholds?userId=${loggedInUser.appuserId}`)
            .then(response => setHouseholds(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSelectHousehold = (household: IHousehold) => {
        // Navigate to the Home tab with the selected household
        navigation.navigate('Home', { household });
    };

    const handleCreateHousehold = () => {
        // Navigate to a household creation screen (not implemented)
        // navigation.navigate('CreateHousehold');
        console.log('Navigate to Create Household screen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Household</Text>
            <FlatList
                data={households}
                keyExtractor={(item) => item.householdId.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.householdItem}
                        onPress={() => handleSelectHousehold(item)}
                    >
                        <Text style={styles.householdName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <Button title="Create New Household" onPress={handleCreateHousehold} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    householdItem: {
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 8,
        borderRadius: 8,
    },
    householdName: {
        fontSize: 18,
    },
});

export default HouseholdSelectionView;
