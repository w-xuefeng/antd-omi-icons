// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudDownloadOutlinedSvg from '@ant-design/icons-svg/es/asn/CloudDownloadOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-cloud-download-outlined')
export default class CloudDownloadOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudDownloadOutlined';
  static tagName = 'o-cloud-download-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloudDownloadOutlinedSvg} />;
  };
}