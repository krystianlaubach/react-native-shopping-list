import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import DarkTheme from './assets/styles/DarkTheme';
import LightTheme from './assets/styles/LightTheme';
import ThemeInterface from './Interfaces/ThemeInterface';

const App = () => {
    const isDarkMode: boolean = useColorScheme() === 'dark';
    const theme: StyleSheet.NamedStyles<ThemeInterface> = isDarkMode ? DarkTheme : LightTheme;

    return (
        <View style={ theme.container }>
            <Text style={ theme.header }>Hello World!</Text>
        </View>
    );
};

export default App;
