import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlayList from './src/components/playlist/PlayList';
import Home from './src/Home';
import TracksList from './src/components/tracks/TracksList';

console.disableYellowBox = true;
const navigator = createStackNavigator(
    {
      Home: {screen: Home, navigationOptions: {header: null}} ,
      PlayList: {screen: PlayList}, 
      TracksList: {screen: TracksList}
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
        title: 'Spotify'
        }
    }
)

export default createAppContainer(navigator);