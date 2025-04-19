import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Page</Text>
            <Link href="/" style={styles.link}> Back Home</Link>
            <Link href="/about" style={styles.link}>About Page</Link>
            <Link href="/profile" style={styles.link}>Profile Page</Link>
        </View>
    )
}

export default Contact

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
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})