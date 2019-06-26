import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import { Header, Left, Icon, Body, Right, Title, Button } from 'native-base';

class SecondHead extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent >
                        <Text onPress={() => this.props.navigation.navigate('welcome')}>
                            <Icon name='arrow-back'  />

                        </Text>
                        {/* <Image source={require('./src/pict/indonesia.jpg')} Style={{ width: 5, height: 1 }} /> */}
                    </Button>
                </Left>
                <Body>
                    <Title style={{ textAlign: 'center', marginLeft: 65 }}> NOTE </Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        )
    }
}

export default SecondHead;