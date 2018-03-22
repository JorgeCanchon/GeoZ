import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
import Title from './Title';
class AddMap extends Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            headerTitle: <Title title="Agregar Mapa" icon="locate" />,
            headerRight: (
                <View style={{flex:1}}>
                    <Text onPress={() => navigation.goBack()} style={{ color: '#A4A4A4',marginRight:10 }}>
                        Enviar
                    </Text>
                </View>
            ),
            headerLeft: (
                <View style={{flex:3}}>
                    <Text onPress={() => navigation.goBack()} style={{ color: '#2E9AFE',marginLeft:10 }}>
                        Cancelar
                    </Text>
                </View>    
            ),
        }
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30,color:'purple' }}>This is a modal!</Text>
                <Button
                    onPress={() => navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        );
    }
}

export default AddMap;