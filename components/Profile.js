import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
class Profile extends React.Component {

  componentDidMount() {
    const { nav } = this.props
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fb6469', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 35}}>Email: xxx </Text>
        <Text style={{fontSize: 35}}>My stories </Text>
      </View>
    );
  }
}

export default Profile
