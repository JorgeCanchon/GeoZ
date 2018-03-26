import React, { Component } from 'react';
import { Text, View } from 'native-base';
import Title from './components/Title';

class ViewMap extends Component{
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            headerTitle: 
            <View style={{flex:2}}>
                <Title title={params.Param} icon="locate" />
            </View>    
        };
    };
    render(){
        return(
            <View style={{flex:1}}>
                <Text>
                    Mapa
                </Text>    
            </View>      
        )
    }
}

export default ViewMap;