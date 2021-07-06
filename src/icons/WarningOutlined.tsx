// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WarningOutlinedSvg from '@ant-design/icons-svg/lib/asn/WarningOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-warning-outlined')
export default class WarningOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WarningOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={WarningOutlinedSvg}></AntdIcon>;
  };
}