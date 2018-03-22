import React, { Component } from 'react';
import { Container, Text } from 'native-base'; 
import SplashScreen from 'react-native-smart-splash-screen';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: 'Welcome Home!',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    };
    componentDidMount() {
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500,
        })
    }
    render() {
        return (
            <Container>
                <Text style={{ fontSize: 30 }}>Home!</Text>
            </Container>
        );
    }
}
export default HomeScreen;
