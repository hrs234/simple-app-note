import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, FlatList } from 'react-native';
import { Content, Fab, Item, Input, Header, Thumbnail, Footer, FooterTab, Left, Body, Right, Title, Container, Card, CardItem, Text, Button, Drawer } from 'native-base';



import HeaderMain from '../header/headersMain';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../public/styles';
import Box from '../components/NoteListBox';
import { TouchableOpacity } from 'react-native-gesture-handler';


// Tutor: welcome
class WelcomeScreen extends Component
{

  constructor(props) {
    super(props)
    this.state = {
      active: 'true',
      flatListProps: [
          {
            id: '1',
            name: 'Hello World',
            category: 'important',
            date: '2000-09-09 00:00',
            content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              id: '2',
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09 00:00',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              id: '3',
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09 00:00',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              id: '4',
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09 00:00',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              id: '5',
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09 00:00',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              id: '6',
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09 00:00',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              id: '7',
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09 00:00',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              id: '8',
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09 00:00',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }]
    }
  }

  _KeyExtractor = (item, index) => item.id;
  
  
  render()
  {
      let randomColor = () =>
      {
        let colorLib = ['B3E5FC', 'DCEDC8', 'B0BEC5', 'F0F4C3', 'FFE0B2', 'D1C4E9'];

        let randomizer = Math.floor(Math.random() * (5 - 0 + 1)) + 0;

        return '#'+colorLib[randomizer];

        

      }
      return(
          <Container>
        <HeaderMain fun={() => this.props.navigation.openDrawer()} />


          <Item rounded style={{ marginTop: 80, width: 300, marginLeft: 32, position: 'absolute', backgroundColor: '#fff', zIndex: 1 }}>
            <Input placeholder='Search...'  />
          </Item>

        <Content >

                  <FlatList
                      style={{ marginTop: 80 }}
                      data={this.state.flatListProps}
                      numColumns={2}
                      keyExtractor={this._KeyExtractor}
                      
                      renderItem=
                        {({ item }) =>
                        
                        <Box time={item.date} color={randomColor()} title={item.name} category={item.category} notes={item.content} events={() => this.props.navigation.navigate('NoteUpdate')} />
                        

                        }
                  />


        </Content>
        <Fab

          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#fff' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('Note')}
        >
          <Icon name="plus" style={{ color: '#000' }} />

        </Fab>




      </Container>

    )

  }
}

export default WelcomeScreen;