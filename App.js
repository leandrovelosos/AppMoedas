import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { PickerItem } from "./src/Picker"
import { api } from "./src/services/api"


export default function App() {

  const [moedas, setMoedas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMoedas() {

      const response = await api.get("all")

      let arrayMoedas = [];

      /*percorremos o response.data e inserimos um objeto 
      com as chaves: key, label e value */
      Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key,
        })
      })

      setMoedas(arrayMoedas)
      setLoading(false)
    }

    loadMoedas();
  }, [])

  if (loading) {
    <View style={styles.backgroundLoading}>
      <ActivityIndicator color="#fff" size="large" />
    </View>
  }
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
    paddingTop: 5,
  },
  backgroundLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101215'
  }

})