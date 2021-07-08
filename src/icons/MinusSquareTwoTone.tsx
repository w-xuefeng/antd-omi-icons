// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MinusSquareTwoToneSvg from '@ant-design/icons-svg/es/asn/MinusSquareTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-minus-square-two-tone')
export default class MinusSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusSquareTwoTone';
  static tagName = 'o-minus-square-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MinusSquareTwoToneSvg} />;
  };
}