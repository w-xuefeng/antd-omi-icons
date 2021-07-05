// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudSyncOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-cloud-sync-outlined')
export default class CloudSyncOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudSyncOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CloudSyncOutlinedSvg}></AntdIcon>;
  };
}