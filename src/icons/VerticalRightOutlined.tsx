// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VerticalRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-vertical-right-outlined')
export default class VerticalRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VerticalRightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={VerticalRightOutlinedSvg}></AntdIcon>;
  };
}