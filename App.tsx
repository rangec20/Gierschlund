
import {Image, StyleSheet, Text, View} from 'react-native';

import React, {useState} from "react";
import Navigator from "./views/Navigator";

export default function App() {

  return (
      <Navigator/>
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
