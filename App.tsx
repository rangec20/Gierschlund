import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import MyBottomTabBar from "./views/MyBottomTabBar";
import {useEffect, useState} from "react";
import {supabase} from "./utils/supabase";

// const [receipts, setReceipts] = useState<IReceipt[]>([]);
//
// useEffect( () => {
//   let rawData : IReceipt[]
//   supabase.from("Receipt").select().then((data) => {
//
//   })
//
//
// }, []);

export default function App() {
  return (
    <NavigationContainer>
      <MyBottomTabBar/>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
