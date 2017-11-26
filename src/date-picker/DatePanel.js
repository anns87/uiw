import React from 'react';
import { Component } from '../utils/';
import Transition from '../transition';
import Popper from '../popper/';
import DatePanelBody from './DatePanelBody';

export default class DatePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const { visible, prefixCls, handleClickOutside, ...resetProps } = this.props;
    console.log('showToday:', resetProps);
    return (
      <Transition in={visible} sequence="fadeIn">
        <Popper
          className={this.classNames(`${prefixCls}-popper`)}
          clickOutside={handleClickOutside}
        >
          <DatePanelBody {...resetProps} />
        </Popper>
      </Transition>
    );
  }
}
