import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native'; 
import { styles } from '../../../common/stylesheet';

/**
 * Some albums have multiple artists
 * @param {object} props 
 */
const getArtistNames = (props) => {
    return props.item.track.artists.map((value, index) => {
        return(
            <Text>Artist Name: {value.name}</Text>
        )
    })
}

/*
 * TrackList item for flatlist. Props
 * will be passed from TracksList class
 * @param {object} props 
 */
const TracksListItem = (props) => {
    return (
        <TouchableOpacity 
         onPress={() => props.onPress(props.item.track)}
         style={styles.listItemcontainer}>
            <View style={styles.imageContainer}>
            <Image
               style={styles.imageContainer}
               source={{uri: props.item.track.album.images[0].url}}
            />
            </View>
            <View style={styles.vertTextContainer}>
                <Text>Album Name: {props.item.track.album.name}</Text>
                {getArtistNames(props)}
                <Text>Popularity: {props.item.track.popularity}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TracksListItem;