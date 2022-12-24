import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Utils
import {WHITE, BLACK} from '../../utils/color';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Screen?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: BLACK,
  },
});

export default Search;
