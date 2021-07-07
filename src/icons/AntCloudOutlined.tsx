// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AntCloudOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntCloudOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-ant-cloud-outlined')
export default class AntCloudOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AntCloudOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AntCloudOutlinedSvg} />;
  };
}