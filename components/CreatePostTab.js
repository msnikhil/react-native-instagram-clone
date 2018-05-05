import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {Icon} from 'native-base';

export default class HomeScreen extends Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => <Icon type="MaterialCommunityIcons" name="plus-box" style={{color: tintColor, fontSize: 30}}/>
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff"}}>
                <Text style={{fontSize: 25}}>This is the Create Post screen.</Text>
                {/* <Button style={{marginTop: 10}} title="Go To Activities Screen" onPress={() => this.props.navigation.navigate('Activities')}/> */}
            </View>
        )
    }
}