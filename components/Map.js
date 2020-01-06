import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Container , Coentent , Header , Item , Icon , Input , Button} from 'native-base';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  async snap(camera) {
    if (camera) {
      let photo = await camera.takePictureAsync();
      console.log('photo:', photo)
    }
    console.log('take picture with success')
  };
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <Header searchBar rounded
              style={{
                  position: 'absolute', backgroundColor: 'transparent',
                  left: 0, top: 0, right: 0, zIndex: 100, alignItems: 'center'
                }}
              >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
              </TouchableOpacity>
              <Icon name="logo-snapchat" style={{ color: 'white', fontWeight: 'bold' }} />
            </View>
            <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-around' }}>
              <Icon onPress={() => {
                                      this.setState({
                                      type: this.state.type === Camera.Constants.FlashMode.on ?
                                      Camera.Constants.FlashMode.off :
                                      Camera.Constants.FlashMode.on
                                    })
                                  }}
                      name="ios-flash" style={{ color: 'white', fontWeight: 'bold',marginLeft: 130 }} />
                </View>

            <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-around'}}>
              <Icon onPress={() => {
                                      this.setState({
                                      type: this.state.type === Camera.Constants.Type.back ?
                                      Camera.Constants.Type.front :
                                      Camera.Constants.Type.back
                                    })
                                  }}
                      name="ios-reverse-camera" style={{ color: 'white', fontWeight: 'bold' , marginLeft: 50}} />
                </View>
              </Header>
              <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-around' }} >
              <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: 36,
                alignItems: 'center',
              }}
              onPress={() => {
                this.snap(this.camera);
              }}
              >
              <FontAwesome
              name="camera"
              style={{ color: "#fff", fontSize: 40}}
              />
              </TouchableOpacity>
              </View>
              </Camera>
        </View>
      );
    }
  }
}
