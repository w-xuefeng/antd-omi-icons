// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StrikethroughOutlinedSvg from '@ant-design/icons-svg/lib/asn/StrikethroughOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-strikethrough-outlined')
export default class StrikethroughOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'StrikethroughOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={StrikethroughOutlinedSvg} />;
  };
}