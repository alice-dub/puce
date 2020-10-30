// Components/Search.js
import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

class Accueil extends React.Component {
    render() {
        return (
            <View style={{marginTop: 50, flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignItems: "center"}}>
            <Text style={[styles.titre]}> Bienvenue dans PUCE </Text>
            <Text style={[styles.soustitre]}> 🚨 L'avertisseur <Text style={{fontWeight: "bold"}}>P</Text>our <Text style={{fontWeight: "bold"}}>U</Text>n 
            <Text style={{fontWeight: "bold"}}> C</Text>hauffage <Text style={{fontWeight: "bold"}}>E</Text>cologique ♨️ 🌱</Text>

            <Text style={[styles.texte]}> Quand une ou des TACs Fioul sont allumées 🏭 , le bilan carbone marginal de la conso explose 💥 ! (800g/kWh) </Text> 
            <Text style={[styles.texte]}> Ça pourrait valoir le coup d'éteindre ton chauffage pour quelques instants non ? </Text>
          </View>
 
        )
    }
}



const styles = StyleSheet.create({
    titre: {
        display:"flex",
        fontSize: 20,
        color:"#696969",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom:20, 
    },
    soustitre: {
        display:"flex",
        fontSize: 20,
        color:"#696969",
        textAlign: "center",
        marginBottom:50, 
    },
    texte: {
        display:"flex",
        fontSize: 17,
        color:"#696969",
        textAlign: "center",
        marginBottom:30, 
    }
  })

  export default Accueil