import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../util/constants';

interface MyTask {
  name: string;
}

export default function Task({ name }: MyTask) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <View style={styles.tab_Container}>
        <View style={styles.button} />
        <Text style={styles.name_Text}>{name}</Text>
        <View style={styles.button} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '85%',
    backgroundColor: COLORS.lightGreen,
    borderRadius: 5,
    margin: 10,
    marginLeft: 30,
  },
  tab_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 10,
    padding: 5,
  },
  button: {
    height: 20,
    width: 20,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 5,
  },
  name_Text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
