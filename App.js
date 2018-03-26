'use strict'
import React, { Component } from 'react';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import {
    StackNavigator, TabNavigator, DrawerNavigator
} from 'react-navigation';

import AddMap from './src/layout/AgregarMapa';
import HomeScreen from './src/layout/Home';
import SideBar from './src/components/SideBar';
import ViewMap from './src/layout/ViewMap';

import allReducers from './src/redux/reducers/index';

const store = createStore(allReducers, applyMiddleware(thunk));

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
            <Provider store={store}>
                <App  /*screenProps={}*/ />
            </Provider>
        );
    }
}
// skip this line if using Create React Native App
//AppRegistry.registerComponent('GeoZ', () => GeoZ);
