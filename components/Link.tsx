import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type LinkProps = {
    to: string,
    text: string,
    viewStyle: Array<ViewStyle>,
    textStyle: TextStyle,
};

const Link: React.FC<LinkProps> = ({ to, text, viewStyle, textStyle }: LinkProps): React.ReactElement => {
    const navigation: any = useNavigation();

    return (
        <TouchableOpacity style={ viewStyle } onPress={ () => navigation.navigate(to) }>
            <Text style={ textStyle }>{ text }</Text>
        </TouchableOpacity>
    );
};

export default Link;
