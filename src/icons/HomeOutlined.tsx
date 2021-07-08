// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HomeOutlinedSvg from '@ant-design/icons-svg/es/asn/HomeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-home-outlined')
export default class HomeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'HomeOutlined';
  static tagName = 'o-home-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HomeOutlinedSvg} />;
  };
}