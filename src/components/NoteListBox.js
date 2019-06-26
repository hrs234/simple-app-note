import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from '../public/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class NoteListBox extends Component
{
    render()
    {
        
        const {color} = this.props;
        return(
            <TouchableOpacity onPress={this.props.events}>
                <View style={{
                    backgroundColor: `${color}`,
                    height: 150,
                    margin: 15,
                    width: 150,
                    borderRadius: 15}}>
                     <Text style={styles.Headings}>{this.props.time}</Text>
                    <Text style={styles.Title}>{this.props.title}</Text>
                    <Text style={styles.Category}>{this.props.category}</Text>
                    <Text style={styles.Notes}>{this.props.notes}</Text> 
                </View>
            </TouchableOpacity>
        )
    }
}