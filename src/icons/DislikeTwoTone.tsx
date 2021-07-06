// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DislikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/DislikeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dislike-two-tone')
export default class DislikeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DislikeTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DislikeTwoToneSvg}></AntdIcon>;
  };
}