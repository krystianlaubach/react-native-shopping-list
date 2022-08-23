import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

type HeaderProps = {
    text: string,
    viewStyle: ViewStyle,
    iconSize: number,
    iconStyle: TextStyle,
    textStyle: TextStyle,
};

const Header: React.FC<HeaderProps> = ({ text, viewStyle, iconSize, iconStyle, textStyle }: HeaderProps): React.ReactElement => {
    return (
        <View style={ viewStyle }>
            <Icon name="shopping-bag" size={ iconSize } style={ iconStyle } />
            <Text style={ textStyle }>{ text }</Text>
        </View>
    );
};

export default Header;
