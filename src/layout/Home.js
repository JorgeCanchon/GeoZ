import React, { Component } from 'react';
import { Container, Text, Header, Content, Icon, Card, Button, Right, CardItem, Body, Fab, View,Item,Input,Left } from 'native-base';
import SplashScreen from 'react-native-smart-splash-screen';
import ListMap from '../components/ListMap';
//import CardMap from './CardMap';
class HomeScreen extends Component {
    static navigationOptions = {
        header:null
    }
    componentDidMount() {
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500,
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header searchBar rounded style={{backgroundColor: '#000'}}>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name="menu" />
                        </Button>
                    </Left>  
                    <Item>
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                        <Icon name="ios-search" />
                    </Item>
                </Header>  
                <ListMap navigation={this.props.navigation}/>
                <Fab
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => { this.props.navigation.navigate('AddMap') }}>
                    <Text>+</Text>
                </Fab>
            </View>
        );
    }
}
export default HomeScreen;