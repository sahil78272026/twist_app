import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const Profile = () => {
    return (
        <View>
            <Text>Profile Page</Text>
            <Link href="/about" style={styles.link}>About Page</Link>
            <Link href="/contact" style={styles.link}>Contact Page</Link>
            <Link href="/" style={styles.link}> Back Home</Link>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})