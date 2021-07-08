// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RadiusBottomleftOutlinedSvg from '@ant-design/icons-svg/es/asn/RadiusBottomleftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-radius-bottomleft-outlined')
export default class RadiusBottomleftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RadiusBottomleftOutlined';
  static tagName = 'o-radius-bottomleft-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RadiusBottomleftOutlinedSvg} />;
  };
}