// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudDownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudDownloadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-cloud-download-outlined')
export default class CloudDownloadOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudDownloadOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CloudDownloadOutlinedSvg}></AntdIcon>;
  };
}