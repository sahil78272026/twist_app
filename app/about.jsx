import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'

const About = () => {
    const colorScheme = useColorScheme() // light or dark
    console.log(colorScheme)
    const theme = Colors[colorScheme]??Colors.light // ?? is used if not found any value then providing default
    console.log(theme)

    return (
        <View style={[styles.container, { backgroundColor:theme.background }]}>
            <Text style={styles.title}>About Page</Text>
            <Link href="/" style={styles.link}> Back Home</Link>
            <Link href="/contact" style={styles.link}>Contact Page</Link>
            <Link href="/profile" style={styles.link}>Profile Page</Link>
        </View>
    )
}

export default About

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