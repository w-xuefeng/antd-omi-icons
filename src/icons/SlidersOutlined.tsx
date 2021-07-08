// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlidersOutlinedSvg from '@ant-design/icons-svg/es/asn/SlidersOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sliders-outlined')
export default class SlidersOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SlidersOutlined';
  static tagName = 'o-sliders-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SlidersOutlinedSvg} />;
  };
}