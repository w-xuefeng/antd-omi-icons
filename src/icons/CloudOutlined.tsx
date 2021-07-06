// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-cloud-outlined')
export default class CloudOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CloudOutlinedSvg}></AntdIcon>;
  };
}