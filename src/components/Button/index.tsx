/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string
}

const Button = ({onPress, title}:Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    height: 50,
    width: '100%',
    backgroundColor: '#a361f5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
