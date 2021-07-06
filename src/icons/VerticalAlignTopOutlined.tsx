// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VerticalAlignTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignTopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-vertical-align-top-outlined')
export default class VerticalAlignTopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VerticalAlignTopOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={VerticalAlignTopOutlinedSvg}></AntdIcon>;
  };
}