// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VerticalAlignTopOutlinedSvg from '@ant-design/icons-svg/es/asn/VerticalAlignTopOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-vertical-align-top-outlined')
export default class VerticalAlignTopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VerticalAlignTopOutlined';
  static tagName = 'o-vertical-align-top-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={VerticalAlignTopOutlinedSvg} />;
  };
}