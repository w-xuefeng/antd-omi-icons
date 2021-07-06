// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LeftSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/LeftSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-left-square-two-tone')
export default class LeftSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftSquareTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={LeftSquareTwoToneSvg}></AntdIcon>;
  };
}