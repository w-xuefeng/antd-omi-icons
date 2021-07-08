// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PhoneOutlinedSvg from '@ant-design/icons-svg/es/asn/PhoneOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-phone-outlined')
export default class PhoneOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PhoneOutlined';
  static tagName = 'o-phone-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PhoneOutlinedSvg} />;
  };
}