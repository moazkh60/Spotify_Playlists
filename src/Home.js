import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions as Dm,
  Alert,
} from 'react-native';
import {images} from './assets/';
import {authorize} from 'react-native-app-auth';
import {config} from './config';
import {USER_PROFILE_URL} from './common/constants';

class Home extends Component {
    
  /**
   * Fetch user country from user profile end point
   */
  fetchUserData = (accessToken) => {
      fetch(USER_PROFILE_URL, {
          method: "GET",
          headers:{
            Authorization: `Bearer ${accessToken}`
          }
      }).then(response => response.json())
      .then(responseJSON => {
        const userData = { accessToken: accessToken, country: responseJSON.country }
        this.props.navigation.navigate('PlayList', {userData})
      }).catch((error) => {
        console.error(error);
      });
  }

  /**
   * Get Access Token Asynchronously and
   * get the access token
   */
  getAccessToken = async () => {
    try {
      const result = await authorize(config);
      if (result.accessToken) {
        this.fetchUserData(result.accessToken)
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to connect to SpotifyAPI');
    }
  };

  /**
   * Show Token request as soon as the app starts
   */
  componentDidMount() {
    this.getAccessToken()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.elementsContainer}>
          <Image
            style={styles.imageContainer}
            source={images.spotify_image}
            resizeMode="contain"
          />

          {/* <TouchableOpacity
            style={styles.buttonStyle}
            title="Go to PlayLists"
            color="#ffffff"
            onPress={() => this.props.navigation.navigate('PlayList')}>
            <Text style={styles.buttonTextStyle}>Go To PlayLists</Text>
          </TouchableOpacity>  */}
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ab26b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  elementsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1 / 3,
    width: Dm.get('window').width - 10,
    height: 100,
  },
  dropDownContainer: {
    flex: 1,
    width: 300,
  },
  imageContainer: {
    width: 500,
    height: 100,
    marginBottom: 30,
    justifyContent: 'center',
  },
  buttonStyle: {
    flex: 1,
    margin: 10,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: Dm.get('window').width - 100,
  },
  buttonTextStyle: {
      fontSize: 18,
      fontWeight: '400'
  }
});
