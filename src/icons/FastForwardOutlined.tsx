// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FastForwardOutlinedSvg from '@ant-design/icons-svg/es/asn/FastForwardOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-fast-forward-outlined')
export default class FastForwardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FastForwardOutlined';
  static tagName = 'o-fast-forward-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FastForwardOutlinedSvg} />;
  };
}