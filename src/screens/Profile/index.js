import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';

// Redux
import {useSelector} from 'react-redux';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import Lists from '../../components/Lists';

const Profile = () => {
  const data = useSelector(state => state.listReducer);

  return (
    <View style={{backgroundColor: '#E1E1E1', flex: 1}}>
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
      <View style={{flex: 1}}>
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
  );
};

export default Profile;
