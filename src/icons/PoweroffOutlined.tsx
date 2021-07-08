// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PoweroffOutlinedSvg from '@ant-design/icons-svg/es/asn/PoweroffOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-poweroff-outlined')
export default class PoweroffOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PoweroffOutlined';
  static tagName = 'o-poweroff-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PoweroffOutlinedSvg} />;
  };
}