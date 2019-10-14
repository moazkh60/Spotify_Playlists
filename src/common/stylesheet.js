import { StyleSheet } from 'react-native';

/**
 * Since the styles we need are common across
 * all files so the styles are refactored into
 * single file from separate files.
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    listItemcontainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 4,
        marginHorizontal: 4,
        marginVertical: 4
    },
    imageContainer: {
        borderRadius: 4,
        height: 200,
    },
    textContainer: {
        flex: 1,
        margin: 8,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    vertTextContainer: {
        flex: 1,
        margin: 8,
        flexDirection: 'column',
        justifyContent: "space-between"
    }
    
    
})