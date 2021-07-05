// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VerticalAlignMiddleOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignMiddleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-vertical-align-middle-outlined')
export default class VerticalAlignMiddleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VerticalAlignMiddleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={VerticalAlignMiddleOutlinedSvg}></AntdIcon>;
  };
}