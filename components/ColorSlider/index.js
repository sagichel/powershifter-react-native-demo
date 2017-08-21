import React from 'react';
import { View, StyleSheet, Slider, Text } from 'react-native';
import PropTypes from 'prop-types';

const ColorSlider = ({ value, label}) => {
  return (
    <View style={styles.slider}>
      <Text style={styles.label}>{label}</Text>
      <Slider maxValue="255" minValue="0" value={value}/>
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
