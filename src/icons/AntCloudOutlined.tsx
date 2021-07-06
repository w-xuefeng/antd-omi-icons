// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AntCloudOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntCloudOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-ant-cloud-outlined')
export default class AntCloudOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AntCloudOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AntCloudOutlinedSvg}></AntdIcon>;
  };
}