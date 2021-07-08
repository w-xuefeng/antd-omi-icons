// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EnterOutlinedSvg from '@ant-design/icons-svg/es/asn/EnterOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-enter-outlined')
export default class EnterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EnterOutlined';
  static tagName = 'o-enter-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EnterOutlinedSvg} />;
  };
}