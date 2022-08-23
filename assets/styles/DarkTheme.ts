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

    homeScreen: {
        flex: 1,
        ...Platform.select({
            ios: {
                paddingTop: 80,
            },
            android: {
                paddingTop: 40,
            },
        }),
    },

    homeHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 70,
        padding: 15,
    },

    homeHeaderIcon: {
        color: Colours.lighter,
    },

    homeHeaderText: {
        marginLeft: 10,
        fontSize: 30,
        fontWeight: '600',
        color: Colours.lighter,
    },

    bottomView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 50,
    },

    newListButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colours.lighter,
        borderRadius: 45,
        height: 50,
        width: 200,
        padding: 15,
    },

    newListButtonText: {
        fontSize: 15,
        fontWeight: '600',
        color: Colours.burgundy,
    },

    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: Colours.black,
                shadowOffset: {
                    width: 0,
                    height: 7,
                },
                shadowOpacity: 0.3,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
                shadowColor: Colours.black,
            },
        }),
    },

    shoppingListScreen: {
        flex: 1,
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

    headerText: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: '600',
        color: Colours.lighter,
    },
});

export default DarkTheme;
