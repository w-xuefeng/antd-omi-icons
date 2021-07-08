// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VerticalLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/VerticalLeftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-vertical-left-outlined')
export default class VerticalLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VerticalLeftOutlined';
  static tagName = 'o-vertical-left-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={VerticalLeftOutlinedSvg} />;
  };
}