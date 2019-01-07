import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  // it('Renders the guess button initially', () => {
  //   const wrapper = shallow(<Game />);
  //   expect(wrapper.hasClass('Header')).toEqual(true);
  // });

  it('Imports all the classes properly', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(Header, GuessSection, StatusSection, InfoSection));
  });

  it('Should make sure that guesses array is empty', () => {
    const wrapper = shallow(<Game />);
    // console.log(wrapper.instance().state);
    // console.log(wrapper);
    // expect(wrapper.state().guesses).to.equal(0); 
    expect(wrapper.instance().state.guesses.length).toEqual(0);   
  });
})