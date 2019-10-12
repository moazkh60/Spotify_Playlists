import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native'; 
import { styles } from './PlayListItemStyles';

/*
 * PlayList item for flatlist. Props
 * will be passed from PlayList class
 * @param {object} props 
 */
const PlayListItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
            <Image
               style={styles.imageContainer}
               source={{uri: props.item.image}}
            />
               
            </View>
            <View style={styles.textContainer}>
                <Text>Title: {props.item.title}</Text>
                <Text>Tracks: {props.item.noOfTracks}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlayListItem;