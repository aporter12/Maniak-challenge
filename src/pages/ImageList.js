import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import * as imagesActions from '../actions/imagesActions';
import * as authTokenActions from '../actions/authTokenActions';

import ImageItem from '../components/ImageItem';
import homeImg from '../assets/home.png';

const ImageList = props => {
  const history = useHistory();

  useEffect(async () => {
    if (!props.imagesReducer?.images?.length) {
      const authToken = props.authTokenReducer.authToken;
      await props.getImages(authToken);
      console.log(props);
    }
  }, []);

  const renderItem = image => {
    return <ImageItem image={image} />;
  };

  const openLogoutAlert = () =>
    Alert.alert('Logout', 'You are about to Logout from this session', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'Logout', onPress: () => doLogout()},
    ]);

  const doLogout = () => {
    props.removeAuthToken();
    history.push('/');
  };

  return (
    <View style={styles.main}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>My Photos</Text>
        <TouchableOpacity onPress={() => openLogoutAlert()}>
          <Text>LOG OUT</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={props.imagesReducer.images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <View style={styles.homeContainer}>
        <TouchableOpacity style={styles.homeBtn}>
          <Image source={homeImg} style={styles.homeImg} />
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: 40,
  },
  title: {
    fontSize: 30,
  },
  homeContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 40,
  },
  homeBtn: {
    alignItems: 'center',
  },
  homeImg: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },
});

const mapStateToProps = ({authTokenReducer, imagesReducer}) => {
  return {authTokenReducer, imagesReducer};
};

export default connect(mapStateToProps, imagesActions)(ImageList);
