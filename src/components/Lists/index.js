import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

// Utils
import {BLACK, PRIMARY} from '../../utils/color';

const Lists = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Image source={props.img} style={styles.images} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{props.name}</Text>
        </View>
        <View style={{flex: 0.5}}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={{color: '#FFFFFF'}}>{props.status}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 0.1,
    borderRadius: 35,
    borderColor: PRIMARY,
    padding: 6,
    borderWidth: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  images: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: PRIMARY,
    marginRight: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 21,
    color: BLACK,
  },
  button: {
    backgroundColor: PRIMARY,
    paddingVertical: 4,
    borderRadius: 35,
    alignItems: 'center',
  },
});

export default Lists;
