import React, { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { mount, shallow, render } from 'enzyme';
import Rules from '../src/components/Rules';
var expect = require('chai').expect

describe('<Rules/>', () => {
  const wrapper = shallow(<Rules/>);
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