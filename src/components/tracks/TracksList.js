import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../../common/stylesheet';

class TracksList extends Component {
  /** State to manage trackslist data */
  state = {tracksList: []};

  /**
   * Fetch tracks by passing id from play
   * list data and then set the tracks list
   * data to stateso that it can be rendered
   * on the screen
   */
  fetchTracksLists = userData => {
    fetch(TRACKS_LIST + `?${userData.country}&limit=50`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userData.accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({playLists: data.playlists.items});
      })
      .catch(error => {
        console.error(error);
      });
  };

  /**
   * Get user data passed in props navigation
   * from playlist screen. Use those id's to fetch
   * tracks list
   */
  componentDidMount() {
    const {navigation} = this.props;
    const {userData} = navigation.state.params;
    this.fetchTracksLists(userData);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.playLists}
          renderItem={({item}) => <TrackListItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
export default TracksList;