import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {Icon} from 'native-base';

export default class HomeScreen extends Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor})=><Icon type="FontAwesome" name="heart" style={{color: tintColor, fontSize: 25}}/>   
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff"}}>
                <Text style={{fontSize: 25}}>This is the Activities screen.</Text>
                {/* <Button style={{marginTop: 10}} title="Go To User Profile Screen" onPress={() => this.props.navigation.navigate('UserProfile')}/> */}
            </View>
        )
    }
}