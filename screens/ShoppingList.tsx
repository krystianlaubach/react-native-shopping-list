import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import DarkTheme from '../assets/styles/DarkTheme';
import LightTheme from '../assets/styles/LightTheme';
import ThemeInterface from '../interfaces/ThemeInterface';
import Header from '../components/Header';

const ShoppingList = () => {
    const isDarkMode: boolean = useColorScheme() === 'dark';
    const theme: StyleSheet.NamedStyles<ThemeInterface> = isDarkMode ? DarkTheme : LightTheme;

    return (
        <View style={ theme.shoppingListScreen }>
            <Header
                text="Shopping List"
                viewStyle={ theme.header }
                iconSize={ 30 }
                iconStyle={ theme.headerIcon }
                textStyle={ theme.headerText }
            />
        </View>
    );
};

export default ShoppingList;
