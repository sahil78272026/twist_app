import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const Profile = () => {
    return (
        <View>
            <Text>Profile Page, adding this comment, qki aaj man nahi kar rha </Text>
            <Text>aaj bhi kuch nahi kar paya, consistency ke liye bas itna likh rha hu </Text>
            <Text> No work</Text>
            <Text> No work Today either </Text>
            <Text> Consistency</Text>
            <Text> Consistency</Text>
            <Text> Consistency</Text>
            <Text> Consistency</Text>
            <Text> Consistency </Text>
            <Text> Consistency</Text>
            <Text> Consistency </Text>
            <Text> Consistency</Text>
            <Text> Consistency</Text>
            <Text> Consistency</Text>
            <Text> Consistencyy</Text>
            <Text> Consistency</Text>
            <Link href="/about" style={styles.link}>About Page</Link>
            <Link href="/contact" style={styles.link}>Contact Page</Link>
            <Link href="/" style={styles.link}> Back Home</Link>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})