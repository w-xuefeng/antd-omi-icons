// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CheckSquareTwoToneSvg from '@ant-design/icons-svg/es/asn/CheckSquareTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-check-square-two-tone')
export default class CheckSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CheckSquareTwoTone';
  static tagName = 'o-check-square-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CheckSquareTwoToneSvg} />;
  };
}