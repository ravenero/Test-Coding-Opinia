import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Lists = props => {
  return (
    <View
      style={{
        marginTop: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 0.1,
        borderRadius: 35,
        borderWidth: 0.1,
        borderColor: '#05B1A1',
        padding: 6,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 4,
        }}>
        <View>
          <Image
            source={props.img}
            style={{
              borderRadius: 50,
              borderWidth: 1,
              borderColor: '#05B1A1',
              marginRight: 8,
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              lineHeight: 21,
              color: '#000000r',
            }}>
            {props.name}
          </Text>
        </View>
        <View style={{flex: 0.5}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#46B29C',
                paddingVertical: 4,
                borderRadius: 35,
                alignItems: 'center',
              }}>
              <Text style={{color: '#FFFFFF'}}>{props.status}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Lists;
