// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderVerticleOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderVerticleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-border-verticle-outlined')
export default class BorderVerticleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderVerticleOutlined';
  static tagName = 'o-border-verticle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BorderVerticleOutlinedSvg} />;
  };
}