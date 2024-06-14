import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { PickerItem } from "./src/Picker"

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.areaApp}>

        <Text style={styles.titulo}>Selecione sua moeda</Text>

        <PickerItem />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center',
  },
  areaApp: {
    backgroundColor: '#f9f9f9',
    width: '90%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    paddingLeft: 5,
    paddingTop: 5


  }

})