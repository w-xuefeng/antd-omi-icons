// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HeartTwoToneSvg from '@ant-design/icons-svg/es/asn/HeartTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-heart-two-tone')
export default class HeartTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'HeartTwoTone';
  static tagName = 'o-heart-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HeartTwoToneSvg} />;
  };
}