import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr } from '../utils';

const setUp = ( props = {} ) => {
  return shallow(<App { ...props } />);   
}

describe('App Component', () => {

  let component;

  beforeEach(() => {
    component = setUp();
  })

  it('Should render without errors', () => {
    const container = findByTestAttr(component, 'App');
    expect(container.length).toBe(1);
  });
}); 