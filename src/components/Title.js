import React, { Component } from 'react';
import { View, Right, Icon,Text } from 'native-base';

class Title extends Component {
    render(){
        const props = this.props;
        return(
            <Right>
                <Text style={{fontSize:20,top:10}}>{props.title}
                &nbsp;
                    <Icon name={props.icon} />
                </Text>
            </Right>
        )
    }
}
export default Title;