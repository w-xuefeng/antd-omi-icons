// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EyeInvisibleTwoToneSvg from '@ant-design/icons-svg/es/asn/EyeInvisibleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-eye-invisible-two-tone')
export default class EyeInvisibleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeInvisibleTwoTone';
  static tagName = 'o-eye-invisible-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EyeInvisibleTwoToneSvg} />;
  };
}