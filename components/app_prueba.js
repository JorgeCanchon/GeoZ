'use strict'
import React, { Component } from 'react';
import {
    AppRegistry, Image, View, Text, StyleSheet, TextInput, Button, Alert, ScrollView, FlatList, SectionList, ActivityIndicator,
    Platform, BackHandler
} from 'react-native';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import {
    StackNavigator, TabNavigator
} from 'react-navigation'

import SettingsScreen from './components/SettingsScreen';

import SplashScreen from 'react-native-smart-splash-screen'
//--------------Componentes---------------//
//#region  
class HomeScreen extends Component {
    constructor(prop) {
        super(prop);
        this.state = { Cambio: 0, isLoading: true };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount () {
        //SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
        SplashScreen.close({
           animationType: SplashScreen.animationType.scale,
           duration: 850,
           delay: 500,
        })
        this.setState({
            isLoading: false,
        })
   }
    pic = [{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Dragonfly_in_Spring.jpg',
        name: 'Libelula'
    }, {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Mediterranean_Spur-thighed_Tortoise.jpg',
        name: 'Tortuga'
    }, {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/M_ninja-400_10.jpg',
        name: 'Ninja 400'
    }];
    handleChange(event) {
        let Cambio = event;
        if ((Cambio != 1) && (Cambio != 2)) {
            Cambio = 0;
        }
        this.setState({ Cambio })
    }
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
            headerRight: (
                <Button
                    title="Profile"
                    onPress={() => {
                        navigate('Profile', {
                            Param: 'First Profile'
                        });
                    }}
                />
            ),
            headerLeft: (
                <Button
                    onPress={() => { navigation.navigate('MyModal') }}
                    title="Info"
                />
            ),
        }
    };
    ChangeImage = () => {
        let change;
        this.setState(previus => {
            if (previus.Cambio == 2) {
                change = 0;
            } else {
                change = ++previus.Cambio;
            }
            return {
                Cambio: change
            }
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        const props = this.props;
        let displayName = this.pic[this.state.Cambio].name;
        let displayImage = this.pic[this.state.Cambio].uri;
        return (
            <View style={{ flex: 1, backgroundColor: "#E6E6E6" }}>
                <ScrollView>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Ingrese numero [0,1,2]"
                        onChangeText={this.handleChange} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={style.name}>{displayName}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Button title="Siguiente" onPress={this.ChangeImage} accessibilityLabel="Siguiente" />
                        </View>
                    </View>
                    <Image source={{ uri: displayImage }} style={{ width: 350, height: 550 }} />
                </ScrollView>
                <View>
                    <Button title="Salir" onPress={() => {
                        Alert.alert(
                            'Exit App',
                            'Do you want to exit?',
                            [
                                { text: 'No', onPress: () => { }, style: 'cancel' },
                                { text: 'Yes', onPress: () => BackHandler.exitApp() },
                            ],
                            { cancelable: false })
                    }} />
                </View>
            </View>
        );
    }
}
class ButtonScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Button!</Text>
            </View>
        );
    }
}
class ProfileScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.Param : 'Welcome!',
        };
    };
    constructor(props) {
        super(props);
        this.state = { Cambio: 0, dataSource: { name: { first: 'Jorge' } } };
    }
    componentDidMount() {
        GetDatos().then(data => {
            this.setState({
                isLoading: false,
                dataSource: data.map(d => { return { key: d } })
            })
        });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#E6E6E6" }}>
                <ScrollView>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Ingrese TITLE"
                        onChangeText={TitleInput => {
                            this.props.navigation.setParams({ Param: TitleInput })
                        }
                        }
                    />
                    <Button
                        title="Profile"
                        onPress={() => {
                            this.props.navigation.navigate('Profile', {
                                Param: 'First Profile'
                            });
                        }}
                    />
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) => <Text style={style.item}>{item.key}</Text>}
                    />
                    <SectionList
                        sections={[
                            { title: 'D', data: ['Daniel', 'Devin', Platform.Version] },
                            { title: 'J', data: ['Jorge', 'Juan'] }
                        ]}
                        renderItem={({ item }) => <Text style={style.item}>{item}</Text>}
                        renderSectionHeader={({ section }) => <Text style={style.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                </ScrollView>
            </View>
        );
    }
}
class ModalScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
                <Button
                    onPress={() => { this.props.navigation.navigate('Tab') }}
                    title="Tabs"
                />
            </View>
        );
    }
}
//----------------------------------------------//
//Funcion Main
const MainStack = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Profile: { screen: ProfileScreen },
    },
    {
        initialRouteName: 'Home',
    }
);
//Funcion que devuelve un componente React
//Funcion root
const App = StackNavigator(
    // this.props.screenProps ;
    {
        Main: {
            screen: MainStack,
        },
        MyModal: {
            screen: ModalScreen,
        },
        Tab: {
            screen: TabNavigator({
                ButtonS: { screen: ButtonScreen },
                Settings: { screen: SettingsScreen },
            })
        }
    },
    {
        mode: 'Modal',
        headerMode: 'none',
    }
);
export default class GeoZ extends Component {
    render() {
        return (
            <App  /*screenProps={}*/ />
        );
    }
}
const style = StyleSheet.create({
    name: {
        color: 'steelblue',
        textAlign: 'center',
        fontSize: 25,
        padding: 5
    },
    item: {
        padding: 2,
        fontSize: 14,
        textAlign: 'center'
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        textAlign: 'center'
    }
});
//Funcion asincrona que obtiene 5 usuarios aleatorios 
const GetDatos = async () => {
    try {
        let response = await fetch('https://randomuser.me/api/?results=5')
        let data = await response.json();
        return data.results.map(d => d.name.first);
    } catch (ex) {
        console.log(ex);
    }
}
// skip this line if using Create React Native App
//AppRegistry.registerComponent('GeoZ', () => GeoZ);
