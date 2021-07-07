// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StopOutlinedSvg from '@ant-design/icons-svg/lib/asn/StopOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-stop-outlined')
export default class StopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'StopOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={StopOutlinedSvg} />;
  };
}