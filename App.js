'use strict'
import React, { Component } from 'react';
import AddMap from './components/AgregarMapa';
import HomeScreen from './components/Home';
import thunk from 'redux-thunk';
import { createStore } from 'redux';
import {
    StackNavigator, TabNavigator
} from 'react-navigation';
import VerMapa from './components/VerMapa';

//Funcion Main
const MainStack = StackNavigator(
    {
        Home: { screen: HomeScreen },
        ViewMap: { screen: VerMapa },
        AddMap: { screen: AddMap }
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
