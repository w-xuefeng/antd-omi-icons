// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DownloadOutlinedSvg from '@ant-design/icons-svg/es/asn/DownloadOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-download-outlined')
export default class DownloadOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DownloadOutlined';
  static tagName = 'o-download-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DownloadOutlinedSvg} />;
  };
}