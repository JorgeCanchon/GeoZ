import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button, Container, Content } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { TabNavigator } from "react-navigation";
import Title from '../components/Title';

import { increment, decrement } from '../redux/actions/index';
//import * as Todos from '../redux/actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddMap extends Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            headerTitle:
                <View style={{ flex: 2 }}>
                    <Title title="Agregar geozona" icon="locate" />
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
            <Container>
                <View style={{ flex: 0.4 }}>
                    <Text>{this.props.count}</Text>
                    <Button dark bordered onPress={() => this.props.increment()}>
                        <Text>Increment</Text>
                    </Button>
                    <Button dark bordered onPress={() => this.props.decrement()}>
                        <Text>Decrement</Text>
                    </Button>
                </View>
                <View style={{ flex: 1 }}>
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
            </Container>
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

const mapStateToProps = (state) => ({count: state.count});

const matchDispatchToProps = (dispatch) => bindActionCreators({ increment: increment, decrement: decrement }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(AddMap);