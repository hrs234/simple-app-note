import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, FlatList, Modal, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import CategoryBtn from '../components/CategoryBtn';
// importing modal contents
import ModalContent from '../components/modal';

export default class DrawerStyle extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            dummyData: [
                {
                    id: '1',
                    nameCategory: 'wishlist'
                },
                {
                    id: '2',
                    nameCategory: 'important'
                },
                {
                    id: '3',
                    nameCategory: 'work'
                }
            ],
            // state of modal
            isModalVisible: false
        }

        
    }

    // to cahnging modal visibility
    changeModalVisibility = (bool) => {
        

        this.setState({ isModalVisible: bool });
    }

    _KeyExtractor = (item, index) => item.id;
    
    

    render()
    {


        return(

            <View >
                <Image source={require('../public/img/indonesia.jpg')} style={drawsStyles.pict}></Image>
                <Text style={drawsStyles.names}>Harris Santoso</Text>
                <ScrollView>
                    <TouchableOpacity>
                        <View style={drawsStyles.container}>
                            <Icon name='folder-open' style={drawsStyles.icons} size={20} />
                            <Text style={drawsStyles.categoryName}>All</Text>
                        </View>
                    </TouchableOpacity>

                    <FlatList
                        data={this.state.dummyData}
                        keyExtractor={this._KeyExtractor}
                        renderItem={({ item }) => <CategoryBtn categoryName={item.nameCategory} />}
                    />
                    
                    <TouchableOpacity onPress={() => this.changeModalVisibility(true)}>
                        <View style={drawsStyles.container}>
                            <Icon name='plus-circle' style={drawsStyles.icons} size={20} />
                            <Text style={drawsStyles.categoryName}>Add Category</Text>
                        </View>
                    </TouchableOpacity>

                    
                </ScrollView>

                {/* Modal to open dialog */}
                <View>
                    <Modal visible={this.state.isModalVisible} transparent={true} onRequestClose={() => this.changeModalVisibility(false)} animationType='fade'>
                            <ModalContent changeModalVisibility={this.changeModalVisibility} />
                    </Modal>
                </View>
                

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