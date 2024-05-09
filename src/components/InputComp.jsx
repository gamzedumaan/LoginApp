import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';

export default function InputComp({ placeholder, value, onChange, Icon, secureTextEntry }) {
  return (
    <View style={styles.email_Container}>
      <Image resizeMode="contain" style={styles.email_Icon} source={Icon} />
      <TextInput
        style={styles.email_ID}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  email_Container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'grey',
    margin: 5,
    padding: 10,
  },
  email_Icon: {
    height: 15,
    width: 15,
  },
});
