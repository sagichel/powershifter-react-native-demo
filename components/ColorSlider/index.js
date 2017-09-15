import React from 'react';
import { View, StyleSheet, Slider, Text } from 'react-native';
import PropTypes from 'prop-types';

const ColorSlider = ({ value, label, handleColorChange }) => {
  return (
    <View style={styles.slider}>
      <Text style={styles.label}>{label}</Text>
      <Slider maximumValue={255} minimumValue={0} step={1} value={value} onSlidingComplete={(val) => handleColorChange(val, label)} />
      <Text>{value}</Text>
    </View>
  );
};

ColorSlider.propTypes = {

};

const styles = StyleSheet.create({
  slider: {
    marginVertical: 15
  },
  label: {
    marginBottom: 15
  }
});

export default ColorSlider;
