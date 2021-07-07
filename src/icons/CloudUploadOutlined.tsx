// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudUploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudUploadOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-cloud-upload-outlined')
export default class CloudUploadOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudUploadOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloudUploadOutlinedSvg} />;
  };
}