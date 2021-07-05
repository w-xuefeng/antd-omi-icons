// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UpSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-up-square-outlined')
export default class UpSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UpSquareOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={UpSquareOutlinedSvg}></AntdIcon>;
  };
}