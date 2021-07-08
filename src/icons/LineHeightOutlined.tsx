// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LineHeightOutlinedSvg from '@ant-design/icons-svg/es/asn/LineHeightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-line-height-outlined')
export default class LineHeightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LineHeightOutlined';
  static tagName = 'o-line-height-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LineHeightOutlinedSvg} />;
  };
}