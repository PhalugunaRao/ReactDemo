import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';

const style =StyleSheet.create({
    bigBlue:{
        color:'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red:{
        color:'red',
    },
});

export default class LotsOfStyles extends Component{
    render() {
      return (
        <View style={{flex: 1}}>
        <View style={{flex: 3 ,backgroundColor:'steelblue'}}/>
       
        <Text style={{width: 50,height: 50,backgroundColor:'skyblue'}}/>
        <View style={{width: 300, height: 100, backgroundColor: 'steelblue'}} />

        <Text style={style.red}>Demo Red</Text>
        <Text style={style.bigBlue}>Big Blue </Text>
        <Text style={[style.bigBlue,style.red]}>Big Blue Big Red </Text>

        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
        
        </View>
      );
    }
}
