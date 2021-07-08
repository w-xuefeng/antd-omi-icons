// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BarsOutlinedSvg from '@ant-design/icons-svg/es/asn/BarsOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bars-outlined')
export default class BarsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BarsOutlined';
  static tagName = 'o-bars-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BarsOutlinedSvg} />;
  };
}