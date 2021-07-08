import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default ({image}) => {
  console.log(image);
  const {item} = image;
  console.log(item.image);
  return (
    <View style={styles.mainContainer}>
      <Text></Text>
      <Image source={{uri: item.image}} style={styles.img} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.descriptionContainer}>
          <Text
            style={styles.description}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.description}
          </Text>
        </View>
      </View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ECEDF2',
    paddingTop: 5,
    paddingBottom: 5,
  },
  img: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    margin: 5,
    borderRadius: 10,
  },
  innerContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
  description: {
    fontSize: 16,
    color: '#8F92A9',
    flexShrink: 2,
    flexBasis: 300,
    paddingRight: 10,
  },
});
