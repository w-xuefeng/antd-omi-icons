// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DollarOutlinedSvg from '@ant-design/icons-svg/lib/asn/DollarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dollar-outlined')
export default class DollarOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DollarOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DollarOutlinedSvg}></AntdIcon>;
  };
}