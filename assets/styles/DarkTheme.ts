import { Platform, StyleSheet } from 'react-native';
import Colours from './Colours';
import ThemeInterface from '../../interfaces/ThemeInterface';

const DarkTheme: StyleSheet.NamedStyles<ThemeInterface> = StyleSheet.create({
    appContainer: {
        flex: 1,
        ...Platform.select({
            ios: {
                paddingTop: 40,
            },
            android: {
                paddingTop: 0,
            },
        }),
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colours.burgundy,
        height: 60,
        padding: 15,
    },

    headerIcon: {
        color: Colours.lighter,
    },

    title: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: '600',
        color: Colours.lighter,
    },
});

export default DarkTheme;
