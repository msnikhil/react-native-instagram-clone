import React, {Component} from 'react';
import {
    View,
    Text,
    Platform,
    Dimensions,
    Stylesheet
} from 'react-native';
import {Container, Content, Body, Header, Footer, Icon} from 'native-base';
import {TabNavigator} from 'react-navigation';

import HomeTab from '../components/HomeTab';
import SearchTab from '../components/SearchTab';
import CreatePostTab from '../components/CreatePostTab';
import ActivitiesTab from '../components/ActivitiesTab';
import UserProfileTab from '../components/UserProfileTab';

export default class MainScreen extends Component{

    static navigationOptions = {
        headerLeft: <Icon type="FontAwesome" name="camera" style={{paddingLeft: 10}}/>,
        title: "Instagram",
        headerRight: <Icon type="FontAwesome" name="send" style={{paddingRight: 10}}/>,
        headerTitleStyle: {
            flex: 1,
            textAlign: "center"
        }
    }

    render(){
        return(
            <MainTabBarNavigator/>
        )
    }
}

const MainTabBarNavigator = new TabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    CreatePostTab: {
        screen: CreatePostTab
    },
    ActivitiesTab: {
        screen: ActivitiesTab
    },
    UserProfileTab: {
        screen: UserProfileTab
    },
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        renderIndicator: () => null,
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: "white"
                }
            })
        },
        activeTintColor: "#000",
        inactiveTintColor: "#c3c3c3",
        showIcon: true,
        showLabel: false
    }
})