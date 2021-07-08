// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HddOutlinedSvg from '@ant-design/icons-svg/es/asn/HddOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-hdd-outlined')
export default class HddOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'HddOutlined';
  static tagName = 'o-hdd-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HddOutlinedSvg} />;
  };
}