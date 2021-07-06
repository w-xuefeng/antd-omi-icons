// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlackCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SlackCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-slack-circle-filled')
export default class SlackCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SlackCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SlackCircleFilledSvg}></AntdIcon>;
  };
}