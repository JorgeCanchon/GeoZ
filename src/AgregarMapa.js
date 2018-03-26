import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Title from './components/Title';
class AddMap extends Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            headerTitle: 
            <View style={{flex:2}}>
                <Title title="Agregar Geozona" icon="locate" />
            </View>,
            headerRight: (
                <View style={{ flex: 1 }}>
                    <Text onPress={() => navigation.goBack()} style={{ color: '#A4A4A4', marginRight: 10 }}>
                        Enviar
                    </Text>
                </View>
            ),
            headerLeft: (
                <View style={{ flex: 3 }}>
                    <Text onPress={() => navigation.goBack()} style={{ color: '#2E9AFE', marginLeft: 10 }}>
                        Cancelar
                    </Text>
                </View>
            ),
        }
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, color: 'purple' }}>This is a modal!</Text>
                <Button
                    onPress={() => navigation.goBack()}
                    title="Dismiss"
                />
                
            </View>
        );
    }
}

export default AddMap;
/**
 * <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
 */