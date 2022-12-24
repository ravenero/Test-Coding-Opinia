import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

// Utils
import {GRAY_BORDER, PRIMARY, WHITE} from '../../utils/color';

const Nav = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity>
          <View
            style={[
              styles.box,
              {backgroundColor: PRIMARY, borderColor: PRIMARY},
            ]}>
            <Image
              source={require('../../assets/img/icons/menu.png')}
              style={styles.img}
            />
          </View>
          <Text style={styles.text}>Semua</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity>
          <View style={styles.box}>
            <Image
              source={require('../../assets/img/icons/idea.png')}
              style={styles.img}
            />
          </View>
          <Text style={styles.text}>Idea</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity>
          <View style={styles.box}>
            <Image
              source={require('../../assets/img/icons/article.png')}
              style={styles.img}
            />
          </View>
          <Text style={styles.text}>Artikel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity>
          <View style={styles.box}>
            <Image
              source={require('../../assets/img/icons/polling.png')}
              style={styles.img}
            />
          </View>
          <Text style={styles.text}>Poling</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity>
          <View style={styles.box}>
            <Image
              source={require('../../assets/img/icons/users.png')}
              style={styles.img}
            />
          </View>
          <Text style={styles.text}>Petisi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
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
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 12,
    marginVertical: 3,
    color: PRIMARY,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default Nav;
