import React, { Component } from 'react';
import { Container, Text, Header, Content, Icon, Card, Button, Right, CardItem, Body, Fab, View } from 'native-base';
import SplashScreen from 'react-native-smart-splash-screen';
import CardMap from './CardMap';
class HomeScreen extends Component {
    static navigationOptions = {
        header: null
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
                <CardMap name='Map' link='ViewMap' icon='eye' description='desc' navigation={this.props.navigation} />
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
