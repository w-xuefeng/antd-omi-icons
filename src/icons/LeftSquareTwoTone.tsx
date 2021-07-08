// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LeftSquareTwoToneSvg from '@ant-design/icons-svg/es/asn/LeftSquareTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-left-square-two-tone')
export default class LeftSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftSquareTwoTone';
  static tagName = 'o-left-square-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LeftSquareTwoToneSvg} />;
  };
}