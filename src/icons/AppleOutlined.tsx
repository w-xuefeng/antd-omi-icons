// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AppleOutlinedSvg from '@ant-design/icons-svg/es/asn/AppleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-apple-outlined')
export default class AppleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AppleOutlined';
  static tagName = 'o-apple-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AppleOutlinedSvg} />;
  };
}