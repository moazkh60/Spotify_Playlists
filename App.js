import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlayList from './src/components/playlist/PlayList';
import Home from './src/Home';
import TracksList from './src/components/tracks/TracksList';
import TrackDetail from './src/components/tracks/trackDetail/TrackDetail';

console.disableYellowBox = true;
const navigator = createStackNavigator(
    {
      Home: {screen: Home, navigationOptions: {header: null}} ,
      PlayList: {screen: PlayList, title: 'User\'s Country Playlist'}, 
      TracksList: {screen: TracksList, title: 'Tracks'},
      TrackDetail: {screen: TrackDetail, title: 'Details'}
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
        title: 'Spotify'
        }
    }
)

export default createAppContainer(navigator);