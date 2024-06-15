import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from "react-native"
import { PickerItem } from "./src/Picker"
import { api } from "./src/services/api"


export default function App() {

  const [moedas, setMoedas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null)

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
      setMoedaSelecionada(arrayMoedas[0].key)
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

        <PickerItem
          moedas={moedas}
          moedaSelecionada={moedaSelecionada}
          onChange={(moeda) => setMoedaSelecionada(moeda)}
        />

      </View>

      <View style={styles.areaValor}>

        <Text style={styles.titulo}>Digite um valor para conveter em R$</Text>

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="EX: 150"
        />

      </View>

      <TouchableOpacity style={styles.botaoArea}>

        <Text style={styles.botaoText}>Converter</Text>

      </TouchableOpacity>

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
    marginBottom: 1
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
    backgroundColor: '#101215',
  },
  areaValor: {
    width: '90%',
    backgroundColor: "#f9f9f9",
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    width: '100%',
    padding: 8,
    fontSize: 18,
    color: '#000',
  },
  botaoArea: {
    width: '90%',
    backgroundColor: '#fb4b57',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  botaoText: {
    color: "#000",
    fontWeight: 'bold',
    fontSize: 16
  }

})