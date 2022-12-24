import React, {Component} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';

// Components
import Nav from '../../components/Nav';

// Utils
import {WHITE} from '../../utils/color';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello World!</Text>
      </View>
      <View style={{marginHorizontal: 12, marginVertical: 12}}>
        <Nav />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
