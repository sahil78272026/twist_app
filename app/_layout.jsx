import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'


const RootLayout = () => {

    const colorScheme = useColorScheme() // light or dark
    console.log(colorScheme)
    const theme = Colors[colorScheme]??Colors.light // ?? is used if not found any value then providing default


    return (
        <View style={{ flex: 1 }}>

            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: theme.navBackground
                },
                headerTintColor: theme.title,

            }}>
                <Stack.Screen name='index' options={{ title: 'Home' }} />
                <Stack.Screen name='about' options={{ title: 'About' }} />
                <Stack.Screen name='contact' options={{ title: 'Contact', headerShown: false }} />
                <Stack.Screen name='profile' options={{ title: 'Profile' }} />
            </Stack>

        </View>
    )
}

export default RootLayout

const styles = StyleSheet.create({})