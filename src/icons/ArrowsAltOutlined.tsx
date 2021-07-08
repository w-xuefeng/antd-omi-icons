// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ArrowsAltOutlinedSvg from '@ant-design/icons-svg/es/asn/ArrowsAltOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-arrows-alt-outlined')
export default class ArrowsAltOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ArrowsAltOutlined';
  static tagName = 'o-arrows-alt-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ArrowsAltOutlinedSvg} />;
  };
}