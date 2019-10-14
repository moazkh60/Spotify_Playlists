import React, {Component} from 'react';
import {View, FlatList, Alert} from 'react-native';
import PlayListItem from './playListItem/PlayListItem';
import {COUNTRY_PLAYLIST} from '../../common/constants';
import {styles} from '../../common/stylesheet';

class PlayList extends Component {
  /** State to manage playlists data */
  state = {playLists: []}

  accessToken = ''

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
        Alert.alert('Failure','Unable to Fetch Playlists')
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
    this.accessToken = userData.accessToken
    this.fetchPlayLists(userData);
  }

  setPlayListItem = (item, accessToken) => {
    return(
    <PlayListItem item={item} 
    onPress={(item) => this.props.navigation.navigate('TracksList', {item, accessToken})}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.playLists}
          renderItem={({item}) => this.setPlayListItem(item, this.accessToken)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default PlayList;
