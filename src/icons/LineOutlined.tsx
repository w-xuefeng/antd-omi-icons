// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LineOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-line-outlined')
export default class LineOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LineOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={LineOutlinedSvg}></AntdIcon>;
  };
}