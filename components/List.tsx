import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import DarkTheme from '../assets/styles/DarkTheme';
import LightTheme from '../assets/styles/LightTheme';
import ItemInterface from '../interfaces/ItemInterface';
import ThemeInterface from '../interfaces/ThemeInterface';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { RenderItemParams } from 'react-native-draggable-flatlist';
import { v4 as uuid } from 'uuid';
import Item from './Item';

const List: React.FC = (): React.ReactElement => {
    const isDarkMode: boolean = useColorScheme() === 'dark';
    const theme: StyleSheet.NamedStyles<ThemeInterface> = isDarkMode ? DarkTheme : LightTheme;
    const [items, setItems] = useState<Array<ItemInterface>>([
        { id: uuid(), name: 'Milk', quantity: 1, unit: 'L' },
        { id: uuid(), name: 'Eggs', quantity: 6, unit: 'pcs' },
        { id: uuid(), name: 'Bread', quantity: 1, unit: 'pcs' },
        { id: uuid(), name: 'Juice', quantity: 2, unit: 'L' },
    ]);

    const renderItem = ({ item, drag, isActive }: RenderItemParams<ItemInterface>): JSX.Element => {
        return (
            <Item item={ item } drag={ drag } isActive={ isActive } />
        );
    };

    return (
        <View style={ theme.shoppingList }>
            <DraggableFlatList
                data={ items }
                onDragEnd={ ({ data}) => setItems(data) }
                keyExtractor={ (item: ItemInterface) => item.id }
                renderItem={ renderItem }
            />
        </View>
    );
};

export default List;
