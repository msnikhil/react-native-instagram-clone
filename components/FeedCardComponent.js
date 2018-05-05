//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import {Container, Content, Card, CardItem, Left, Thumbnail, Body, Right, Icon} from 'native-base';
// create a component
class FeedCard extends Component {
    render() {

        const user_images = {
            "1": require("../assets/images/profile_1.png"),
            "2": require("../assets/images/profile_2.jpg"),
            "3": require("../assets/images/profile_3.jpg"),
        }

        const post_images = {
            "1": require("../assets/images/post_1.jpg"),
            "2": require("../assets/images/post_2.jpg"),
            "3": require("../assets/images/post_3.jpg"),
        }

        return (
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail style={{borderWidth: 2, borderColor: "#e6e6e6", width: 40, height: 40}} source={user_images[this.props.postnumber]}/>
                            <Body>
                                <Text style={{fontWeight: "900"}}>{this.props.username}</Text>
                            </Body>
                        </Left>
                        <Right>
                            <Icon type="Entypo" name="dots-three-vertical" />
                        </Right>
                    </CardItem>
                    <CardItem style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}}>
                        <Image source={post_images[this.props.postnumber]} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Icon style={{marginRight: 10}} type="Feather" name="heart"/>
                            <Icon style={{marginRight: 10}} type="Feather" name="message-circle"/>
                            <Icon type="SimpleLineIcons" name="paper-plane"/>
                        </Left>
                        <Right>
                            <Icon style={{color: "#000000", fontSize: 27}} type="FontAwesome" name="bookmark-o"/>
                        </Right>
                    </CardItem>
                    <CardItem style={{paddingTop: 0}}>
                        <Body>
                            <Text style={{fontWeight: "900"}}>{this.props.likes} likes</Text>                            
                            <Text>
                                <Text style={{fontWeight: "900"}}>{this.props.username} </Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default FeedCard;
