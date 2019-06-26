import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class CategoryBtn extends Component
{
    render()
    {
        return(
            <TouchableOpacity>
                <View style={drawsStyles.container}>
                    <Icon name='folder-open' style={drawsStyles.icons} size={20} />
                    <Text style={drawsStyles.categoryName}>{this.props.categoryName}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const drawsStyles = StyleSheet.create({
    container: {

        padding: 15,
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    pict: {
        marginTop: 45,
        marginBottom: 25,
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 150
    },
    names: {
        alignSelf: 'center',
        fontSize: 25,
        marginBottom: 55
    },
    icons: {
        marginRight: 13,
        marginLeft: 16
    },
    categoryName: {
        fontSize: 20
    }
});