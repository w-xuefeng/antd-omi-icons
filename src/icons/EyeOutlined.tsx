// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EyeOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-eye-outlined')
export default class EyeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EyeOutlinedSvg} />;
  };
}