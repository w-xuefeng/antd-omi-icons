// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ToolOutlinedSvg from '@ant-design/icons-svg/lib/asn/ToolOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-tool-outlined')
export default class ToolOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ToolOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ToolOutlinedSvg} />;
  };
}