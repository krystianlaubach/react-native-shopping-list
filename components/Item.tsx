import React from 'react';
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { ScaleDecorator } from 'react-native-draggable-flatlist';
import Icon from 'react-native-vector-icons/Entypo';
import ItemInterface from '../interfaces/ItemInterface';
import ThemeInterface from '../interfaces/ThemeInterface';
import DarkTheme from '../assets/styles/DarkTheme';
import LightTheme from '../assets/styles/LightTheme';

type ItemProps = {
    item: ItemInterface,
    drag: () => void,
    isActive: boolean,
};

const Item: React.FC<ItemProps> = ({ item, drag, isActive }: ItemProps): React.ReactElement => {
    const isDarkMode: boolean = useColorScheme() === 'dark';
    const theme: StyleSheet.NamedStyles<ThemeInterface> = isDarkMode ? DarkTheme : LightTheme;

    return (
        <ScaleDecorator>
            <TouchableOpacity style={ [theme.item, (isActive ? theme.itemActive : {})] } onLongPress={ drag } disabled={ isActive }>
                <View style={ theme.itemView }>
                    <View style={ theme.itemInnerLeftView }>
                        <Icon name="grid" size={ 30 } style={ theme.itemIcon } />
                        <Text style={ theme.itemText }>{ item.name }</Text>
                    </View>
                    <View style={ theme.itemInnerRightView }>
                        <Text style={ theme.itemText }>{ item.quantity + ' ' + item.unit }</Text>
                        <Icon name="dots-three-vertical" size={ 20 } style={ theme.itemIcon } />
                    </View>
                </View>
            </TouchableOpacity>
        </ScaleDecorator>
    );
};

export default Item;
