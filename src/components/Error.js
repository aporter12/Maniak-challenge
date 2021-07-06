import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function Error(props) {
  return (
    <View>
      <Text style={styles.errorText}>An error ocurred:</Text>
      <Text style={styles.errorText}>{props.error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});
