import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  text: {
    marginLeft: 16,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const PithreRow = (props) => (
  <TouchableNativeFeedback>
    <View style={[styles.container]}>
      <Image source={{ uri: props.picture.large}} style={styles.photo} />
      <Text style={styles.text}>
        {`${props.name.first} ${props.name.last}`}
      </Text>
    </View>
  </TouchableNativeFeedback>
);

export default PithreRow;
