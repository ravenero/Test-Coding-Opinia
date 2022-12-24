import React, {Component, useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';

// Plugin
import {FloatingAction} from 'react-native-floating-action';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Modal from 'react-native-modal';

// Components
import Nav from '../../components/Nav';
import Posts from '../../components/Posts';

// Utils
import {BLACK, GRAY, GRAY_BG, ORANGE, PRIMARY, WHITE} from '../../utils/color';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = props => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={[PRIMARY, '#006C90']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={{padding: 12}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity>
                <Ionicons name="arrow-back-outline" color={WHITE} size={22} />
              </TouchableOpacity>
            </View>
            <View style={styles.contentHeader}>
              <Text style={styles.textHeader}>Profile</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Ionicons
                    name="share-social-outline"
                    size={20}
                    color={WHITE}
                    style={{marginRight: 12}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('DetailProfile')}>
                  <Ionicons name="person-outline" size={20} color={WHITE} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
      {/* End Header */}
      {/* Profile */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('../../assets/img/avatar-1.png')}
              style={styles.cover}
            />

            <View style={{alignItems: 'flex-end', margin: 14}}>
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.buttonCamera}>
                  <Ionicons name="camera" size={20} color={WHITE} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.contentProfile}>
              <View>
                <Image
                  source={require('../../assets/img/avatar-1.png')}
                  style={styles.imageProfile}
                />
              </View>
              <View style={styles.containerProfile}>
                <View
                  style={{
                    marginHorizontal: width * 0.3,
                    marginVertical: 12,
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: 'bold', color: BLACK}}>
                    Skylar Vaccaro
                  </Text>
                  <AirbnbRating
                    showRating={false}
                    size={12}
                    count={5}
                    defaultRating={0}
                    isDisabled={true}
                    ratingContainerStyle={{
                      alignItems: 'flex-start',
                      marginTop: 2,
                    }}
                  />
                </View>
                <View
                  style={{
                    marginHorizontal: width * 0.2,
                    marginVertical: 12,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 14, fontWeight: '400', color: BLACK}}>
                    Penulis | Politisi
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: BLACK,
                      textAlign: 'center',
                    }}>
                    "Hidup itu sederhana, kita yang membuatnya sulit."
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: PRIMARY,
                    borderBottomLeftRadius: 7,
                    borderBottomRightRadius: 7,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 1}}>
                    <TouchableNativeFeedback>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRightWidth: 1,
                          borderRightColor: WHITE,
                        }}>
                        <Text style={[styles.text, {color: WHITE}]}>
                          Postingan
                        </Text>
                        <Text
                          style={[
                            styles.text,
                            {color: WHITE, fontSize: 16, fontWeight: 'bold'},
                          ]}>
                          24
                        </Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                  <View style={{flex: 1}}>
                    <TouchableNativeFeedback
                      onPress={() => props.navigation.navigate('Following')}>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRightWidth: 1,
                          borderRightColor: WHITE,
                        }}>
                        <Text style={[styles.text, {color: WHITE}]}>
                          Mengikuti
                        </Text>
                        <Text
                          style={[
                            styles.text,
                            {color: WHITE, fontSize: 16, fontWeight: 'bold'},
                          ]}>
                          30
                        </Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                  <View style={{flex: 1}}>
                    <TouchableNativeFeedback
                      onPress={() => props.navigation.navigate('Followers')}>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRightColor: WHITE,
                        }}>
                        <Text style={[styles.text, {color: WHITE}]}>
                          Pengikut
                        </Text>
                        <Text
                          style={[
                            styles.text,
                            {color: WHITE, fontSize: 16, fontWeight: 'bold'},
                          ]}>
                          29
                        </Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.contentPoin}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 12,
              }}>
              <View>
                <Image
                  source={require('../../assets/img/diamond.png')}
                  style={styles.img}
                />
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.headline}>Total Poin Anda</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.desc}>230 </Text>
                  <Text
                    style={[
                      styles.desc,
                      {fontSize: 12, color: GRAY, fontWeight: '400'},
                    ]}>
                    Klaim Reward
                  </Text>
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={20}
                    color={BLACK}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{marginHorizontal: 12}}>
            <View>
              <View>
                <Text style={styles.text}>Lengkapi Profil Anda 2/3</Text>
                <Progress.Bar
                  progress={0.7}
                  width={width * 0.9}
                  borderColor={PRIMARY}
                  color={ORANGE}
                  style={{marginVertical: 6}}
                />
              </View>
            </View>
            <View style={{marginVertical: 8}}>
              <Nav />
            </View>
            <View style={{marginVertical: 12}}>
              <Posts />
            </View>
          </View>
        </View>
      </ScrollView>

      <FloatingAction
        floatingIcon={
          <Ionicons name="pencil-outline" color="#FFFFFF" size={28} />
        }
        color={PRIMARY}
      />
      {/* End Profile */}

      {/* Modal */}
      <Modal
        testID={'modal'}
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        swipeDirection={['down']}
        animationOut="fadeOutDown"
        style={{
          justifyContent: 'flex-end',
          margin: 0,
          paddingHorizontal: 14,
        }}>
        <View
          style={{
            backgroundColor: PRIMARY,
            padding: 22,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            justifyContent: 'center',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableNativeFeedback>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Ionicons name="camera-outline" color={WHITE} size={24} />
                <Text style={{fontSize: 13, fontWeight: '400', color: WHITE}}>
                  Kamera
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Ionicons name="image-outline" color={WHITE} size={24} />
                <Text style={{fontSize: 13, fontWeight: '400', color: WHITE}}>
                  Kamera
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={{borderWidth: 1, borderColor: WHITE, marginTop: 12}} />

          <View>
            <TouchableNativeFeedback>
              <View style={{padding: 12, alignItems: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: WHITE}}>
                  HAPUS GAMBAR BANNER
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <TouchableNativeFeedback onPress={toggleModal}>
          <View
            style={{padding: 12, backgroundColor: WHITE, alignItems: 'center'}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: PRIMARY}}>
              BATAL
            </Text>
          </View>
        </TouchableNativeFeedback>
      </Modal>
      {/* End Modal */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },

  contentPoin: {
    backgroundColor: GRAY_BG,
    paddingVertical: 6,
    marginVertical: 20,
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 6,
  },

  headline: {
    fontSize: 14,
    fontWeight: '700',
    color: BLACK,
  },
  desc: {
    fontSize: 16,
    fontWeight: '700',
    color: ORANGE,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: GRAY,
  },
  cover: {
    width: width,
    height: height * 0.3,
    position: 'absolute',
  },

  buttonCamera: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 50,
  },

  contentProfile: {
    justifyContent: 'flex-end',
    marginTop: height * 0.1,
    marginHorizontal: 12,
  },

  imageProfile: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginHorizontal: 12,
    position: 'absolute',
    zIndex: 10000000,
  },

  containerProfile: {
    backgroundColor: WHITE,
    marginTop: 35,
    height: 200,
    borderRadius: 7,
    borderColor: 'red',
    shadowOpacity: 0.08,
    elevation: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  textHeader: {
    fontSize: 15,
    fontWeight: '500',
    color: WHITE,
  },

  contentHeader: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Home;
