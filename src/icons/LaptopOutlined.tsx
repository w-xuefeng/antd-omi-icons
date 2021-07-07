// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LaptopOutlinedSvg from '@ant-design/icons-svg/lib/asn/LaptopOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-laptop-outlined')
export default class LaptopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LaptopOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LaptopOutlinedSvg} />;
  };
}