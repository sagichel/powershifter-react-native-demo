import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ColorSlider from '../ColorSlider';

const PickerSection = () => {
  return (
    <View style={styles.container}>
      <ColorSlider label="Red"/>
      <ColorSlider label="Green"/>
      <ColorSlider label="Blue"/>
    </View>
  );
};

PickerSection.propTypes = {

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
