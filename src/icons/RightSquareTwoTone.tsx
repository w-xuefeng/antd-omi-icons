// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RightSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-right-square-two-tone')
export default class RightSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'RightSquareTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={RightSquareTwoToneSvg}></AntdIcon>;
  };
}