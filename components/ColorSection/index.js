import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const ColorSection = ({ color }) => {
  return (
    <View style={styles.container}>
      <Text>Current Colour</Text>
      <View style={[styles.displayColour, {backgroundColor: `rgb(${color.red},${color.green},${color.blue})`}]}>
      </View>
      <View style={styles.currentValue}>
        <Text>{`rgb(${color.red},${color.green},${color.blue})`}</Text>
      </View>
    </View>
  );
};

ColorSection.propTypes = {

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  displayColour: {
    flex: 2,
    marginVertical: 15
  },
  currentValue: {
    alignItems: "center",
    marginBottom: 15
  }
});

export default ColorSection;
