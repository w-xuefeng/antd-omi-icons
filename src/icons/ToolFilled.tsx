// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ToolFilledSvg from '@ant-design/icons-svg/es/asn/ToolFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-tool-filled')
export default class ToolFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ToolFilled';
  static tagName = 'o-tool-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ToolFilledSvg} />;
  };
}