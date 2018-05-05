import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {Icon} from 'native-base';

export default class HomeScreen extends Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => <Icon type="FontAwesome" name="search" style={{color: tintColor, fontSize: 25}}/>   
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff"}}>
                <Text style={{fontSize: 25}}>This is the Search screen.</Text>
            </View>
        )
    }
}