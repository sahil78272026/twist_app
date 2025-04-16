import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>index, hello, testing expo router</Text>
      <Text style={{marginTop:10, marginBottom:30}}> Reading List App </Text>
      <View style={styles.card}>
        <Text> This is a card </Text>
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    title :{
      fontWeight:'bold',
      fontsize:18
    },
    card:{
        backgroundColor:'#eee',
        padding:20,
        borderRadius:5,
        boxShadow:'4px 4px rgba(0,0,0,0.1)'
    }
})