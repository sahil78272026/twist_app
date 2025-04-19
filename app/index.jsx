import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/img/logo_light.png'
import { Link } from 'expo-router'


const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.img} />
            <Text style={[styles.title, { color: 'purple' }]}>index, hello, testing expo router</Text>
            <Text style={{ marginTop: 10, marginBottom: 30 }}> Reading List App </Text>
            <View style={styles.card}>
                <Text> This is a card </Text>
            </View>

            <Link href="/about" style={styles.link}>About Page</Link>
            <Link href="/contact" style={styles.link}>Contact Page</Link>
            <Link href="/profile" style={styles.link}>Profile Page</Link>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontWeight: 'bold',
        fontsize: 18
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0.1)'
    },
    img: {
        marginVertical: 20
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})