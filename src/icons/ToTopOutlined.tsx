// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ToTopOutlinedSvg from '@ant-design/icons-svg/es/asn/ToTopOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-to-top-outlined')
export default class ToTopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ToTopOutlined';
  static tagName = 'o-to-top-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ToTopOutlinedSvg} />;
  };
}