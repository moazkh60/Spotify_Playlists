import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './PlayListStyles';

class PlayList extends Component{

    playListData = [
        {
          id: '1',
          title: 'Dummy playlist title 3',
          image: '',
          noOfTracks: '20'
        },
        {
            id: '2',
            title: 'Dummy playlist title 2',
            image: '',
            noOfTracks: '10'
          },
      ];
    
    render(){
        return(
            <View style={styles.container}>
                <Text>Hello PlayList</Text>
                <FlatList
                  data={playListData}
                  renderItem={({ item }) => <Item title={item.title} />}
                  keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

export default PlayList;