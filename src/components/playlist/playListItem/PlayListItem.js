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
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View style={styles.imageContainer}>
            <Image
               style={styles.imageContainer}
               source={{uri: props.item.images[0].url}}
            />
               
            </View>
            <View style={styles.textContainer}>
                <Text>Title: {props.item.name}</Text>
                <Text>Tracks: {props.item.tracks.total}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlayListItem;