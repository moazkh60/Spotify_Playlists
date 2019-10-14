import React, {Component} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {styles} from '../../common/stylesheet';
import TrackListItem from './tracksListItem/TracksListItem';

class TracksList extends Component {
  /** State to manage trackslist data */
  state = {tracksList: []};

  /**
   * Fetch tracks by passing id from play
   * list data and then set the tracks list
   * data to stateso that it can be rendered
   * on the screen
   */
  fetchTracksLists = (item, accessToken) => {
    fetch(item.href, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({tracksList: data.tracks.items});
      })
      .catch(error => {
        Alert.alert('Failure', 'Unable to Fetch Tracks')
      });
  };

  /**
   * Get user data passed in props navigation
   * from playlist screen. Use those id's to fetch
   * tracks list
   */
  componentDidMount() {
    const {navigation} = this.props;
    const {item, accessToken} = navigation.state.params;
    this.fetchTracksLists(item, accessToken);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.tracksList}
          renderItem={({item}) => <TrackListItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
export default TracksList;