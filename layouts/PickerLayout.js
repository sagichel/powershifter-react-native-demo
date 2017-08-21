import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import PickerSection from '../components/PickerSection';
import ColorSection from '../components/ColorSection';

class PickerLayout extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ColorSection />
        </View>
        <PickerSection />
      </View>
    );
  }
};

PickerLayout.propTypes = {

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  content: {
    flex: 1
  }
});

export default PickerLayout;
