// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DribbbleSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/DribbbleSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dribbble-square-outlined')
export default class DribbbleSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DribbbleSquareOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DribbbleSquareOutlinedSvg}></AntdIcon>;
  };
}