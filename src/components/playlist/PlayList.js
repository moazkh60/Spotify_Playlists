import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './PlayListStyles';
import PlayListItem from './playListItem/PlayListItem';
import {COUNTRY_PLAYLIST} from '../../common/constants';

class PlayList extends Component {
  /** State to manage playlists data */
  state = {playLists: []};

  /**
   * Fetch playlists by passing country from
   * user data and then set the playlists data to state
   * so that it can be rendered on the screen
   */
  fetchPlayLists = userData => {
    fetch(COUNTRY_PLAYLIST + `?${userData.country}&limit=50`, {
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
   * from previous screen. Use that accesstoken and
   * country data to fetch the playlists
   */
  componentDidMount() {
    const {navigation} = this.props;
    const {userData} = navigation.state.params;
    this.fetchPlayLists(userData);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.playLists}
          renderItem={({item}) => <PlayListItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default PlayList;
