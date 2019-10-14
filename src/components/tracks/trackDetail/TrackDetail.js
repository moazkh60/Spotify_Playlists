import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from '../../../common/stylesheet';

class TrackDetail extends Component {
  /** To convert milliseconds to minutes */
  MILLI_SEC = 60000;
  /**
   * Some albums have multiple artists
   * @param {object} item
   */
  getArtistNames = item => {
    return item.artists.map((value, index) => {
      return (
        <View style={styles.rowView}>
          <Text style={styles.boldText}>Artist Name:</Text>
          <Text>{value.name}</Text>
        </View>
      );
    });
  };

  render() {
    const {navigation} = this.props;
    const {item} = navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.listItemcontainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainer}
              source={{uri: item.album.images[0].url}}
            />
          </View>
          <View>
            <View style={styles.rowView}>
              <Text style={styles.boldText}>Track Name: </Text>
              <Text>{item.name}</Text>
            </View>
            {this.getArtistNames(item)}
            <View style={styles.rowView}>
              <Text style={styles.boldText}>Album Name: </Text>
              <Text>{item.album.name}</Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.boldText}>Duration: </Text>
              <Text>{item.duration_ms / this.MILLI_SEC} minutes</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default TrackDetail;
