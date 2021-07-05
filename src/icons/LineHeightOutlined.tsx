// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LineHeightOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineHeightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-line-height-outlined')
export default class LineHeightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LineHeightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={LineHeightOutlinedSvg}></AntdIcon>;
  };
}