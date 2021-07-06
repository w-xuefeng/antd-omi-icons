// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownloadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-download-outlined')
export default class DownloadOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DownloadOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DownloadOutlinedSvg}></AntdIcon>;
  };
}