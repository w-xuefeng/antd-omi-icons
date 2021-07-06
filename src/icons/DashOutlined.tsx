// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DashOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dash-outlined')
export default class DashOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DashOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DashOutlinedSvg}></AntdIcon>;
  };
}