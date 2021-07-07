// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VerticalAlignMiddleOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignMiddleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-vertical-align-middle-outlined')
export default class VerticalAlignMiddleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VerticalAlignMiddleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={VerticalAlignMiddleOutlinedSvg} />;
  };
}