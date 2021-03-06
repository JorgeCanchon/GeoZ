import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const datas = [
    'Map0',
    'Map1',
    'Map2',
    'Map3',
    'Map4',
    'Map5',
    'Map6',
    'Map7',
    'Map8',
    'Map9',
    'Map0',
    'Map1',
    'Map2',
    'Map3',
    'Map4',
    'Map5',
    'Map6',
    'Map7',
    'Map8',
];
class ListMap extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true,
            listViewData: datas,
        };
    }
    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
    }
    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <Container>
                <Content>
                    <List
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>
                            <ListItem onPress={() => {
                                this.props.navigation.navigate('ViewMap', {
                                    Param: data
                                })
                            }}>
                                <Text> {data} </Text>
                            </ListItem>}
                        renderLeftHiddenRow={data =>
                            <Button full onPress={() => alert(data)}>
                                <Icon active name="information-circle" />
                            </Button>}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                <Icon active name="trash" />
                            </Button>}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                </Content>
            </Container>
        );
    }
}
export default ListMap;