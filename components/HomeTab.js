import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
    // Button
} from 'react-native';
// import { Font } from "expo";

import { Container, Header, Content, Icon, Button, Left, Right, Title, Body } from 'native-base';
import FeedCard from './FeedCardComponent';

export default class HomeScreen extends Component{
    
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => { return <Icon type="Entypo" name="home" style={{color: tintColor, fontSize: 25}}/>}
    }

    // async componentWillMount() {
    //     await Font.loadAsync({
    //       Roboto: require("native-base/Fonts/Roboto.ttf"),
    //       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    //     });
    //     this.setState({ loading: false });
    // }

    render(){
        return (
            <Container style={styles.container}>
                <Content>
                    <FeedCard username="Alesso" likes="209,900" postnumber="1"/>
                    <FeedCard username="Ingrosso" likes="309,900" postnumber="2"/>
                    <FeedCard username="Dan DiFelice" likes="409,900" postnumber="3"/>
                </Content>
            </Container>
            // <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            //     <Text>HomeTab</Text>
            // </View>
            // <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff"}}>
            //     <Text style={{fontSize: 25}}>This is the Home screen.</Text>
            //     <Button style={{marginTop: 10}} title="Go To Search Screen" onPress={() => this.props.navigation.navigate('Search')}/>
            // </View>
            // <Container>
            //     <Header style={{backgroundColor: "#FFFFFF"}}>
            //         <Left style={{flex:1}}>
            //             <Icon type="FontAwesome" name="camera"/>
            //         </Left>
            //         <Body style={{flex:1, alignItems: "center"}}>
            //             <Title style={{color: "#000000", fontSize: 20}}>Instagram</Title>
            //         </Body>
            //         <Right style={{flex:1}}>
            //             <Icon type="FontAwesome" name="send"/>
            //         </Right>
            //     </Header>
            //     <Content></Content>
            // </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'pink',
    },
});