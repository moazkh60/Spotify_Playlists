import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './PlayListStyles';
import PlayListItem  from './playListItem/PlayListItem';
import { images } from '../../assets';

class PlayList extends Component{

    // dummy data
    playListData = [
        {
          id: '1',
          title: 'Dummy playlist title 3',
          image: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          noOfTracks: '20'
        },
        {
            id: '2',
            title: 'Dummy playlist title 2',
            image: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            noOfTracks: '10'
          },
      ];
    
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                  data={this.playListData}
                  renderItem={({ item }) => <PlayListItem item={item}/> }
                  keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

export default PlayList;