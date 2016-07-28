import React, { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { mount, shallow, render } from 'enzyme';
import About from '../src/components/About';
var expect = require('chai').expect

describe('<About/>', () => {
  const wrapper = shallow(<About/>);
  it('should contain one view', () => {
    expect(wrapper.find(View)).to.have.length(1);
  })
  it('should have a back button', () => {
    expect(wrapper.find(TouchableHighlight)).to.have.length(1);
  })
  it('should have two text components', () => {
    expect(wrapper.find(Text)).to.have.length(2);
  })
})