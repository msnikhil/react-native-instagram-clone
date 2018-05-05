import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import {Icon} from 'native-base';

export default class HomeScreen extends Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => <Icon type="MaterialIcons" name="person" style={{color: tintColor, fontSize: 30}}/>
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff"}}>
                <Text style={{fontSize: 25}}>This is the User Profile screen.</Text>
            </View>
        )
    }
}