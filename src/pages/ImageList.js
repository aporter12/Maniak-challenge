import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import * as imagesActions from '../actions/imagesActions';
import ImageItem from '../components/ImageItem';
import homeImg from '../assets/home.png';

const ImageList = props => {
  useEffect(async () => {
    if (!props.imagesReducer?.images?.length) {
      const authToken = props.authTokenReducer.authToken;
      await props.getImages(authToken);
    }
  }, []);

  const renderItem = image => {
    return <ImageItem image={image} />;
  };

  const doLogout = () => {
    console.log('Should logout');
  };

  return (
    <View style={styles.main}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>My Photos</Text>
        <TouchableOpacity onPress={() => doLogout()}>
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
