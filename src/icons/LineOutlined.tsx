// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LineOutlinedSvg from '@ant-design/icons-svg/es/asn/LineOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-line-outlined')
export default class LineOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LineOutlined';
  static tagName = 'o-line-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LineOutlinedSvg} />;
  };
}