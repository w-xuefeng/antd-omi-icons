// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RiseOutlinedSvg from '@ant-design/icons-svg/lib/asn/RiseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-rise-outlined')
export default class RiseOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RiseOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={RiseOutlinedSvg}></AntdIcon>;
  };
}