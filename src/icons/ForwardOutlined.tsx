// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ForwardOutlinedSvg from '@ant-design/icons-svg/es/asn/ForwardOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-forward-outlined')
export default class ForwardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ForwardOutlined';
  static tagName = 'o-forward-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ForwardOutlinedSvg} />;
  };
}