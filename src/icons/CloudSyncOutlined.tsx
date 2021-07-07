// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudSyncOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-cloud-sync-outlined')
export default class CloudSyncOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudSyncOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloudSyncOutlinedSvg} />;
  };
}