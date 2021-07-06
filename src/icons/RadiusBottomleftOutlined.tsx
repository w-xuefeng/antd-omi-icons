// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RadiusBottomleftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomleftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-radius-bottomleft-outlined')
export default class RadiusBottomleftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RadiusBottomleftOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={RadiusBottomleftOutlinedSvg}></AntdIcon>;
  };
}