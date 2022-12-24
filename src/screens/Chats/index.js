import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Utils
import {WHITE, BLACK} from '../../utils/color';

const Chats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chats Screen?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: BLACK,
  },
});

export default Chats;
