// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RightSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-right-square-outlined')
export default class RightSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RightSquareOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RightSquareOutlinedSvg}></AntdIcon>;
  };
}