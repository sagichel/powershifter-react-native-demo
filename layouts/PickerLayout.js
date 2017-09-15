import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import PickerSection from '../components/PickerSection';
import ColorSection from '../components/ColorSection';

class PickerLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: {
        red: 0,
        green: 0,
        blue: 0
      }
    }
    this.handleColorChange = this.handleColorChange.bind(this);
  };

  handleColorChange = (value, label) => {
    let newColor;
    switch (label) {
      case 'red':
        newColor = { red: value }
        break;
      case 'blue':
        newColor = { blue: value }
        break;
      default:
        newColor = { green: value }
        break;
    };
    const newColors = Object.assign(this.state.colors, newColor);
    this.setState({ colors: newColors});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ColorSection color={this.state.colors}/>
        </View>
        <PickerSection colors={this.state.colors} handleColorChange={this.handleColorChange} />
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
