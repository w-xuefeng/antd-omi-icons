// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StopOutlinedSvg from '@ant-design/icons-svg/lib/asn/StopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-stop-outlined')
export default class StopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'StopOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={StopOutlinedSvg}></AntdIcon>;
  };
}