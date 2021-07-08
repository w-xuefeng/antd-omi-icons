// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SkinOutlinedSvg from '@ant-design/icons-svg/es/asn/SkinOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-skin-outlined')
export default class SkinOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SkinOutlined';
  static tagName = 'o-skin-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SkinOutlinedSvg} />;
  };
}