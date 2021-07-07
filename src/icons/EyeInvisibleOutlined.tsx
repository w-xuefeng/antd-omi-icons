// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EyeInvisibleOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-eye-invisible-outlined')
export default class EyeInvisibleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeInvisibleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EyeInvisibleOutlinedSvg} />;
  };
}