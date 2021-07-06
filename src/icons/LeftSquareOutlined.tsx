// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LeftSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-left-square-outlined')
export default class LeftSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftSquareOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={LeftSquareOutlinedSvg}></AntdIcon>;
  };
}