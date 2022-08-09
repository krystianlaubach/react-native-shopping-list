import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import DarkTheme from '../assets/styles/DarkTheme';
import LightTheme from '../assets/styles/LightTheme';
import ThemeInterface from '../interfaces/ThemeInterface';

type HeaderProps = {
    text: string,
};

const Header: React.FC<HeaderProps> = ({ text }: HeaderProps): React.ReactElement => {
    const isDarkMode: boolean = useColorScheme() === 'dark';
    const theme: StyleSheet.NamedStyles<ThemeInterface> = isDarkMode ? DarkTheme : LightTheme;

    return (
        <View style={ theme.header }>
            <Icon name='shopping-bag' size={30} style={ theme.headerIcon } />
            <Text style={ theme.title }>{ text }</Text>
        </View>
    );
};

export default Header;
