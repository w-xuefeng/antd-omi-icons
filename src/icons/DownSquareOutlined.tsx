// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DownSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-down-square-outlined')
export default class DownSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DownSquareOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DownSquareOutlinedSvg}></AntdIcon>;
  };
}