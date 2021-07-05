// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ToolFilledSvg from '@ant-design/icons-svg/lib/asn/ToolFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-tool-filled')
export default class ToolFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ToolFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ToolFilledSvg}></AntdIcon>;
  };
}