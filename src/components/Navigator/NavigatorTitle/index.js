import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavigatorTitle = () => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'stretch'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Icon name="arrow-forward-outline" />
          </View>
          <View style={{flex: 1}}>
            <Text>Pengikut</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});

export default NavigatorTitle;
