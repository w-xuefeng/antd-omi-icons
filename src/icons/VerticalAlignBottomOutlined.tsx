// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VerticalAlignBottomOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignBottomOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-vertical-align-bottom-outlined')
export default class VerticalAlignBottomOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VerticalAlignBottomOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={VerticalAlignBottomOutlinedSvg}></AntdIcon>;
  };
}