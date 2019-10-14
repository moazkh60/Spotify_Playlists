import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native'; 
import { styles } from '../../../common/stylesheet';

/*
 * TrackList item for flatlist. Props
 * will be passed from TracksList class
 * @param {object} props 
 */
const TracksListItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onPress(props.item)} style={styles.listItemcontainer}>
            <View style={styles.imageContainer}>
            <Image
               style={styles.imageContainer}
               source={{uri: props.item.track.album.images[0].url}}
            />
            </View>
            <View style={styles.textContainer}>
                <Text>Title: {props.item.track.album.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TracksListItem;