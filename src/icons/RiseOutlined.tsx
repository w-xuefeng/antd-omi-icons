// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RiseOutlinedSvg from '@ant-design/icons-svg/es/asn/RiseOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-rise-outlined')
export default class RiseOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RiseOutlined';
  static tagName = 'o-rise-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RiseOutlinedSvg} />;
  };
}