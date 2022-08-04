import { StyleSheet } from 'react-native';
import Colours from './Colours';
import ThemeInterface from '../../Interfaces/ThemeInterface';

const DarkTheme: StyleSheet.NamedStyles<ThemeInterface> = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        fontSize: 24,
        fontWeight: '600',
        color: Colours.lighter,
    },
});

export default DarkTheme;
