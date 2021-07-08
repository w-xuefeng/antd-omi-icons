// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VerticalAlignBottomOutlinedSvg from '@ant-design/icons-svg/es/asn/VerticalAlignBottomOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-vertical-align-bottom-outlined')
export default class VerticalAlignBottomOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VerticalAlignBottomOutlined';
  static tagName = 'o-vertical-align-bottom-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={VerticalAlignBottomOutlinedSvg} />;
  };
}