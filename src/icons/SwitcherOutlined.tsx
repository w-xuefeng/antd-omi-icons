// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SwitcherOutlinedSvg from '@ant-design/icons-svg/es/asn/SwitcherOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-switcher-outlined')
export default class SwitcherOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SwitcherOutlined';
  static tagName = 'o-switcher-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SwitcherOutlinedSvg} />;
  };
}