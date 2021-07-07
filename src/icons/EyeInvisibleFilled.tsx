// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EyeInvisibleFilledSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-eye-invisible-filled')
export default class EyeInvisibleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeInvisibleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EyeInvisibleFilledSvg} />;
  };
}