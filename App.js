import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlayList from './src/components/playlist/PlayList';
import Home from './src/Home';

const navigator = createStackNavigator(
    {
      Home: {screen: Home} ,
      PlayList: {screen: PlayList}  
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
        title: 'Select Your Country'
        }
    }
)

export default createAppContainer(navigator);