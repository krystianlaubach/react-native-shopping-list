import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DarkTheme from './assets/styles/DarkTheme';
import LightTheme from './assets/styles/LightTheme';
import ThemeInterface from './interfaces/ThemeInterface';
import Home from './screens/Home';
import ShoppingList from './screens/ShoppingList';

const Stack = createNativeStackNavigator();

const App: React.FC = (): React.ReactElement => {
    const isDarkMode: boolean = useColorScheme() === 'dark';
    const theme: StyleSheet.NamedStyles<ThemeInterface> = isDarkMode ? DarkTheme : LightTheme;

    return (
        <GestureHandlerRootView style={ theme.appContainer }>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Home" component={ Home } />
                        <Stack.Screen name="Shopping List" component={ ShoppingList } />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
};

export default App;
