'use strict'
import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { createStore } from 'redux';
import {
    StackNavigator, TabNavigator, DrawerNavigator
} from 'react-navigation';
import AddMap from './src/AgregarMapa';
import HomeScreen from './src/Home';
import SideBar from './src/components/SideBar';
import ViewMap from './src/ViewMap';
//Funcion Main
const MainStack = StackNavigator(
    {
        Home: { screen: HomeScreen },
        ViewMap: { screen: ViewMap },
        AddMap: { screen: AddMap }
    },
    {
        initialRouteName: 'Home',
    }
);
//Funcion que devuelve un componente React
//Funcion root
const App = DrawerNavigator(
    // this.props.screenProps ;
    {
        Main: {
            screen: MainStack,
        }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default class GeoZ extends Component {
    render() {
        return (
            <App  /*screenProps={}*/ />
        );
    }
}
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
