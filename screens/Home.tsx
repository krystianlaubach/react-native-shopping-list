import React from 'react';
import { ImageBackground, StyleSheet, useColorScheme, View } from 'react-native';
import DarkTheme from '../assets/styles/DarkTheme';
import LightTheme from '../assets/styles/LightTheme';
import ThemeInterface from '../interfaces/ThemeInterface';
import Header from '../components/Header';
import Link from '../components/Link';

const Home: React.FC = (): React.ReactElement => {
    const isDarkMode: boolean = useColorScheme() === 'dark';
    const theme: StyleSheet.NamedStyles<ThemeInterface> = isDarkMode ? DarkTheme : LightTheme;

    return (
        <ImageBackground style={ theme.homeScreen } source={ require('../assets/img/BackgroundImage.png')}>
            <View>
                <Header
                    text="Shopping List"
                    viewStyle={ theme.homeHeader }
                    iconSize={ 40 }
                    iconStyle={ theme.headerIcon }
                    textStyle={ theme.homeHeaderText }
                />
            </View>
            <View style={ theme.bottomView }>
                <Link
                    to="Shopping List"
                    text="Create Shopping List"
                    viewStyle={ [theme.newListButton, theme.shadow] }
                    textStyle={ theme.newListButtonText }
                />
            </View>
        </ImageBackground>
    );
};

export default Home;
