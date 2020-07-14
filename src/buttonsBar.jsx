import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: 'rgba(1,1,1,.1)',
    height: 90,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '20%',
    flexWrap: 'wrap',
  },
});

export default function ButtonsBar(props) {
  const { onPress } = props;
  return (
    <View style={styles.topBar}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(1)}
      >
        <Text style={styles.buttonText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(2)}
      >
        <Text style={styles.buttonText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(3)}
      >
        <Text style={styles.buttonText}>3</Text>
      </TouchableOpacity>
    </View>
  );
}
