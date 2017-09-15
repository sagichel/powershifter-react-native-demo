import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ColorSlider from '../ColorSlider';

const PickerSection = ({ colors, handleColorChange }) => {
  return (
    <View style={styles.container}>
      <ColorSlider label="Red" value={colors.red} handleColorChange={(value) => handleColorChange(value, "red")} />
      <ColorSlider label="Green" value={colors.green} handleColorChange={(value) => handleColorChange(value, "green")}/>
      <ColorSlider label="Blue" value={colors.blue} handleColorChange={(value) => handleColorChange(value, "blue")}/>
    </View>
  );
};

PickerSection.propTypes = {
  colors: PropTypes.shape({
    red: PropTypes.number,
    green: PropTypes.number,
    blue: PropTypes.number
  }),
  handleColorChange: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    justifyContent: "space-between",
    paddingHorizontal: 16
  }
});

export default PickerSection;
