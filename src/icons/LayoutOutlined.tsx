// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LayoutOutlinedSvg from '@ant-design/icons-svg/es/asn/LayoutOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-layout-outlined')
export default class LayoutOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LayoutOutlined';
  static tagName = 'o-layout-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LayoutOutlinedSvg} />;
  };
}