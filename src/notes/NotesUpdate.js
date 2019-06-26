import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Header, Left, Body, Right, Title, Button, Center, Content, Item, Input, Form, Picker, InputGroup, Textarea } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


import Head from '../header/SecondHead';
import { TextInput } from 'react-native-gesture-handler';

export default class NotesUpdate extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }

    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }

    render()
    {
        return(
            <View>
                {/* <Head /> */}

                <Header style={{ marginBottom: 55, backgroundColor: '#fff' }}>
                    <Left>
                        <Button transparent >
                            <Text onPress={() => this.props.navigation.navigate('welcome')}>
                                <Icon name='arrow-left' style={{ color: '#000' }} size={25} />

                            </Text>
                            {/* <Image source={require('./src/pict/indonesia.jpg')} Style={{ width: 5, height: 1 }} /> */}
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ textAlign: 'center', marginLeft: 35, color: '#000' }}> NOTE UPDATE</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='check-circle-o' style={{ color: '#000' }} size={25} />
                        </Button>
                    </Right>
                </Header>

                {/* <Text style={Style.Teks} onPress={() => this.props.navigation.navigate('welcome')}>He {this.props.nama}</Text> */}
                

                
                    <View>
                        <Form>
                        <Textarea placeholder="ADD TITLE..." style={{ marginBottom: 55, fontSize: 30, marginLeft: 30}}></Textarea>
                        <Textarea placeholder="ADD DESCRIPTION..." style={{ fontSize: 30, marginBottom: 19, width: 220, marginLeft: 30}}></Textarea>
                            <Text style={{marginLeft: 30}}>CATEGORY</Text>
                            <View style={{marginLeft: 30}}>
                                <Picker
                            
                                headerComponent={
                                    <Header>
                                        <Button transparent>
                                            Custom Back
                                    </Button>
                                        <Title>Custom Header</Title>
                                    </Header>
                                }
                                mode='dropdown'
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)}
                                style={{ width: 200 }}>
                                    <Item label='Important' value='key0' />
                                    <Item label='Wishlist' value='key1' />
                                    <Item label='awesome' value='key2' />
                                </Picker>
                            </View>
                        </Form>    
                    </View>
                
            </View>
        )
    }
}

// export default Notes;



const Style = StyleSheet.create(
{
    Teks:{
        color: 'blue',
        
    }
});