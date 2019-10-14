import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import {styles} from '../../../common/stylesheet';

class TrackDetail extends Component {

  render() {
    const {navigation} = this.props;
    const {item} = navigation.state.params;
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}
export default TrackDetail;