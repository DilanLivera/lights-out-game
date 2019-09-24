import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import { findByTestAttr }  from '../utils';

const setUp = ( props={} ) => {
  return shallow(<Board { ...props } />);
}

describe('Board Component', () => {

  // test winning state
  describe('Check winning state', () => {
    let wrap;

    beforeEach(() => {
      wrap = setUp();
      wrap.setState({ hasWon: true });
    });
    
    it('Should change state', () => {
      expect(wrap.state('hasWon')).toEqual(true);
    });

    it('Should render winning message', () => {
      const message = findByTestAttr(wrap, 'winner')
      expect(message.length).toBe(1);
    });
  });

  // test board
  describe('Show board', () => {
    let wrap;

    beforeEach(() => {
      const props = {
        nrows: 6,
        ncols: 6,
      };
      wrap = setUp(props);
    });

    it('Should render board', () => {
      const board = findByTestAttr(wrap, 'board');
      expect(board.length).toBe(1);
    });

    it('Should render 36 cells', () => {
      const cells = findByTestAttr(wrap, 'cell');
      expect(cells.length).toBe(36);
    });
  });

});