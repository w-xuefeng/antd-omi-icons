// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MinusSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-minus-square-two-tone')
export default class MinusSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusSquareTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MinusSquareTwoToneSvg}></AntdIcon>;
  };
}