import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Notifications extends React.Component {

  componentDidMount() {
    const { nav } = this.props
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#a064fb', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 35}}>Notifications</Text>
        <TouchableOpacity style={{backgroundColor: '#333333', marginTop: 50, padding: 15}}
          onPress={() => this.props.nav.navigate('Profile')}
        >
          <Text style={{color: 'white'}}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Notifications
