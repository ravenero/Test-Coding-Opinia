import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

// Utils
import {BLACK, GRAY, GRAY_BORDER, PRIMARY, WHITE} from '../../utils/color';

const Posts = props => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/img/avatar-1.png')}
            style={styles.img}
          />
        </View>
        <View>
          <Text style={styles.headline}>Julia Mareta</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.desc}>19 Menit Lalu | </Text>
            <Text style={[styles.desc, {color: PRIMARY}]}>Idea</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.text}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, Selengkapnya...
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  box: {
    backgroundColor: WHITE,
    padding: 14,
    borderWidth: 1,
    borderColor: GRAY_BORDER,
    borderRadius: 7,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: PRIMARY,
    marginRight: 6,
  },
  text: {
    fontSize: 14,
    marginVertical: 5,
    color: BLACK,
    fontWeight: '400',
  },
  headline: {
    fontSize: 16,
    fontWeight: '700',
    color: BLACK,
  },
  desc: {
    fontSize: 12,
    color: GRAY,
    fontWeight: '400',
  },
});

export default Posts;
