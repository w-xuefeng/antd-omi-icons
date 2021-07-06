// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VerticalLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-vertical-left-outlined')
export default class VerticalLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VerticalLeftOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={VerticalLeftOutlinedSvg}></AntdIcon>;
  };
}