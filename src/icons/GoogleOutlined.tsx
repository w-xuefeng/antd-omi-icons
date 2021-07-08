// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GoogleOutlinedSvg from '@ant-design/icons-svg/es/asn/GoogleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-google-outlined')
export default class GoogleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GoogleOutlined';
  static tagName = 'o-google-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GoogleOutlinedSvg} />;
  };
}