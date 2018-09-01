import React from 'react';
import { mount } from 'enzyme';
import { Steps } from '../../../src';

describe('<Steps>', () => {
  const wrapper = mount(
    <Steps current={1} status="process" style={{ padding: '20px 0' }}>
      <Steps.Step title="步骤一" description="这里是步骤一的说明，可以很长很长哦。这里是步骤一的说明，可以很长很长哦。这里是步骤一的说明，可以很长很长哦。" />
      <Steps.Step title="步骤二" description="这里是步骤二的说明，可以很长很长哦。" />
      <Steps.Step title="步骤三" description="这里是步骤三的说明，可以很长很长哦。" />
      <Steps.Step title="步骤四" description="这里是步骤一的说明，可以很长很长哦。" />
    </Steps>);
  it('Test the default props and node.', () => {
    expect(wrapper.name()).toBe('Steps');
    // 默认值测试
    expect(wrapper.find('.w-steps')).toHaveLength(1);
    expect(wrapper.type()).toEqual(Steps);
    expect(wrapper.at(0).prop('prefixCls')).toBe('w-steps');
    expect(wrapper.at(0).prop('status')).toBe('process');
    expect(wrapper.at(0).prop('direction')).toBe('horizontal');
    expect(wrapper.at(0).prop('current')).toBe(1);
    expect(wrapper.find('.w-steps-item').at(0).prop('className')).toBe('w-steps-item w-steps-item-finish');
    expect(wrapper.find('.w-steps-item').at(1).prop('className')).toBe('w-steps-item w-steps-item-process');
    expect(wrapper.find('.w-steps-item').at(2).prop('className')).toBe('w-steps-item w-steps-item-wait');
    expect(wrapper.find('.w-steps-item').at(3).prop('className')).toBe('w-steps-item w-steps-item-wait');
  });

  it('Test current attributes', async () => {
    await wrapper.setProps({ current: 2 });
    expect(wrapper.find('.w-steps-item-process').at(0).prop('className')).toBe('w-steps-item w-steps-item-process');
  });

  it('Test status attributes', () => {
    wrapper.setProps({ status: 'error' });
    expect(wrapper.find('.w-steps-item').at(2).prop('className')).toBe('w-steps-item w-steps-item-error');
  });

  it('Test direction attributes', () => {
    wrapper.setProps({ direction: 'vertical' });
    expect(wrapper.find('.w-steps').at(0).prop('className')).toBe('w-steps w-steps-vertical');
  });
});
