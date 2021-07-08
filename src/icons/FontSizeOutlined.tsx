// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FontSizeOutlinedSvg from '@ant-design/icons-svg/es/asn/FontSizeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-font-size-outlined')
export default class FontSizeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FontSizeOutlined';
  static tagName = 'o-font-size-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FontSizeOutlinedSvg} />;
  };
}