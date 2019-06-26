import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CategoryBtn from '../components/CategoryBtn';


export default class DrawerStyle extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            dummyData: [
                {
                    nameCategory: 'wishlist'
                },
                {
                    nameCategory: 'important'
                },
                {
                    nameCategory: 'work'
                }
            ]
        }
    }
    render()
    {
        return(
            <View >
                <Image source={require('../public/img/indonesia.jpg')} style={drawsStyles.pict}></Image>
                <Text style={drawsStyles.names}>Harris Santoso</Text>
                <ScrollView>
                    <FlatList
                        data={this.state.dummyData}
                        renderItem={({ item }) => <CategoryBtn categoryName={item.nameCategory} />}
                    />
                    
                    <TouchableOpacity>
                        <View style={drawsStyles.container}>
                            <Icon name='plus-circle' style={drawsStyles.icons} size={20} />
                            <Text style={drawsStyles.categoryName}>Add Category</Text>
                        </View>
                    </TouchableOpacity>

                    
                </ScrollView>
            </View>
        )
    }
}

const drawsStyles = StyleSheet.create({
    container:{
        
        padding: 15,
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    pict:{
        marginTop: 45,
        marginBottom: 25,
        alignSelf: 'center',
        width: 100, 
        height: 100, 
        borderRadius: 150
    },
    names:{
        alignSelf: 'center',
        fontSize: 25,
        marginBottom: 55
    },
    icons:{
        marginRight: 13,
        marginLeft: 16
    },
    categoryName:{
        fontSize: 20
    }
});