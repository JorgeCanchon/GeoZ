import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Title from '../components/Title';
class AddMap extends Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            headerTitle:
                <View style={{ flex: 2 }}>
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
                <View style={styles.container}>
                    <MapView
                    style={styles.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});
export default AddMap;