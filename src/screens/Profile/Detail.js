import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

// Utils
import {PRIMARY, BLACK, GRAY, WHITE} from '../../utils/color';

// Redux
import {useSelector} from 'react-redux';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import Lists from '../../components/Lists';

const DetailProfile = () => {
  const data = useSelector(state => state.listReducer);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/bg.png')}
        style={styles.bg}>
        <View>
          {/* Header */}
          <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <View>
                  <Ionicons name="arrow-back-outline" size={24} color={BLACK} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* End Header */}

          {/* Content */}
          <View>
            <View style={{marginHorizontal: 12}}>
              <View style={{marginBottom: 12, marginTop: 6}}>
                <Text style={styles.headline}>Pekerjaan</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{marginRight: 12}}>
                    <Image source={require('../../assets/img/icons/bag.png')} />
                  </View>
                  <View style={styles.containerText}>
                    <Text style={styles.text}>Graphic Design</Text>
                    <Text style={styles.text}>Opinia</Text>
                    <Text style={styles.text}>(2008-Sekarang)</Text>
                  </View>
                </View>
                <View style={styles.lines} />
              </View>
              <View style={{marginBottom: 12}}>
                <Text style={styles.headline}>Pendidikan</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{marginRight: 12}}>
                    <Image
                      source={require('../../assets/img/icons/education.png')}
                    />
                  </View>
                  <View style={styles.containerText}>
                    <Text style={styles.text}>Design Engineering</Text>
                    <Text style={styles.text}>
                      Politeknik Manufaktur negeri Bandung
                    </Text>
                    <Text style={styles.text}>(2011-2013)</Text>
                  </View>
                </View>
                <View style={styles.lines} />
              </View>
              <View style={{marginBottom: 12}}>
                <Text style={styles.headline}>Tempat Tinggal</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{marginRight: 12}}>
                    <Image
                      source={require('../../assets/img/icons/maps.png')}
                    />
                  </View>
                  <View style={styles.containerText}>
                    <Text style={styles.text}>Kota Bekasi</Text>
                    <Text style={styles.text}>(2011-2013)</Text>
                  </View>
                </View>
                <View style={styles.lines} />
              </View>
              <View style={{marginBottom: 12}}>
                <Text style={styles.headline}>Hobi</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{marginRight: 12}}>
                    <Image
                      source={require('../../assets/img/icons/hobby.png')}
                    />
                  </View>
                  <View style={styles.containerText}>
                    <Text style={styles.text}>Musik</Text>
                  </View>
                </View>
                <View style={styles.lines} />
              </View>
              <View style={{marginBottom: 12}}>
                <Text style={styles.headline}>Website</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{marginRight: 12}}>
                    <Image source={require('../../assets/img/icons/web.png')} />
                  </View>
                  <View style={styles.containerText}>
                    <Text style={styles.text}>www.gdsagdsagdsa.com</Text>
                  </View>
                </View>
                <View style={styles.lines} />
              </View>
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
    backgroundColor: WHITE,
  },

  headline: {
    color: PRIMARY,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
  },

  text: {
    fontSize: 14,
    fontWeight: '400',
    color: BLACK,
    marginBottom: 2,
  },

  containerText: {
    marginVertical: 8,
  },

  lines: {
    borderBottomWidth: 1,
    borderBottomColor: GRAY,
    marginTop: 2,
    marginBottom: 4,
  },

  header: {
    padding: 12,
  },

  bg: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default DetailProfile;
