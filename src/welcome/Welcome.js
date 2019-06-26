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
            name: 'Hello World',
            category: 'important',
            date: '2000-09-09',
            content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }, 
          {
              name: 'Hello World',
              category: 'important',
              date: '2000-09-09',
              content: 'lorem ipsum dolor sit amet bla bla bla'
          }]
    }
  }

  
  
  
  render()
  {
      let randomColor = () =>
      {
        let colorLib = ['90CAF9', 'DCE775', 'B0BEC5', '9C27B0', '9575CD'];

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