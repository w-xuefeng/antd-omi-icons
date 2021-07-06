// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ManOutlinedSvg from '@ant-design/icons-svg/lib/asn/ManOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-man-outlined')
export default class ManOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ManOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ManOutlinedSvg}></AntdIcon>;
  };
}