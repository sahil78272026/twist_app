import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Page</Text>
            <Text> Not able to focus these days., tyring to be consistent </Text>
            <Text> Aaj bhi nahi kara, </Text>
            <Text> Not done today </Text>
            <Text> Not done anything today, just passing time. Trying hard not to loose stream. Doing minimum.
            </Text>

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