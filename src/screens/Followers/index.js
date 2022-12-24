import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Redux
import {useSelector} from 'react-redux';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import Lists from '../../components/Lists';

// Utils
import {BLACK, PRIMARY, TRANSPARENT, WHITE} from '../../utils/color';

const width = Dimensions.get('window').width;

const Followers = props => {
  const data = useSelector(state => state.listReducer);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../../assets/img/bg.png')}
          style={styles.bg}>
          <View>
            {/* Header */}
            <LinearGradient
              colors={[PRIMARY, '#006C90']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <View style={{padding: 12}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                      <Ionicons
                        name="arrow-back-outline"
                        color={WHITE}
                        size={22}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.contentHeader}>
                    <Text style={styles.textHeader}>Pengikut</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
            {/* End Header */}

            {/* Content */}
            <View style={{marginBottom: 12}}>
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
      </ScrollView>
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

  textHeader: {
    fontSize: 15,
    fontWeight: '500',
    color: WHITE,
  },

  contentHeader: {
    width: width * 0.8,
    alignItems: 'center',
  },
});

export default Followers;
