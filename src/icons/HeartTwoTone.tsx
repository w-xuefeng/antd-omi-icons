// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HeartTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-heart-two-tone')
export default class HeartTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'HeartTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={HeartTwoToneSvg}></AntdIcon>;
  };
}