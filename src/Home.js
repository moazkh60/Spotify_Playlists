import React, {Component} from 'react';
import {StyleSheet, View, Image, Button, Dimensions as Dm} from 'react-native';
import {images} from './assets/';
import {Dropdown} from 'react-native-material-dropdown';
import {countries} from './common/constants';

class Home extends Component {
  state = {value: ''};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.elementsContainer}>
          <Image
            style={styles.imageContainer}
            source={images.spotify_image}
            resizeMode="contain"
          />
          <View style={styles.dropDownContainer}>
            <Dropdown
              label="Select Your Country"
              baseColor="white"
              containerStyle={{flex: 1}}
              data={countries}
              value={this.state.value}
              onChangeText={value => this.setState({value})}
            />
          </View>
          <Button style={styles.buttonStyle} title="Go" color="#ffffff" />
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
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'white',
  },
});
