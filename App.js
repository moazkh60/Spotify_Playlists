import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlayList from './src/components/playlist/PlayList';

const navigator = createStackNavigator(
    {
      PlayList: {screen: PlayList}  
    },
    {
        initialRouteName: 'PlayList',
        defaultNavigationOptions: {
            title: 'Recommended Playlists'
        }
    }
)

export default createAppContainer(navigator);