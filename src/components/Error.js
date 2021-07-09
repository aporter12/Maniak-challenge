import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default ({error}) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>An error ocurred:</Text>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    marginBottom: 30,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});
