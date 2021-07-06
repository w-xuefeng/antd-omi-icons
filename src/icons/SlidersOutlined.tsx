// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlidersOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlidersOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-sliders-outlined')
export default class SlidersOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SlidersOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SlidersOutlinedSvg}></AntdIcon>;
  };
}