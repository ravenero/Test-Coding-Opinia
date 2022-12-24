import React, {Component} from 'react';
import {
  View,
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

// Redux
import {useSelector} from 'react-redux';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import Lists from '../../components/Lists';

// Utils
import {TRANSPARENT} from '../../utils/color';

const Followers = () => {
  const data = useSelector(state => state.listReducer);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/bg.png')}
        style={styles.bg}>
        <View>
          {/* Header */}
          {/* <View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Ionicons name="menu-outline" />
          </View>
          <Text style={{alignItems: 'center'}}>Profile</Text>
        </View>
      </View> */}
          {/* End Header */}

          {/* Content */}
          <View>
            <View style={{marginHorizontal: 12}}>
              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <Lists name={item.name} img={item.img} status="Ikuti" />
                )}
              />
            </View>
          </View>
          {/* End Content */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TRANSPARENT,
  },

  bg: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default Followers;
