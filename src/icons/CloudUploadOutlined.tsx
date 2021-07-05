// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudUploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudUploadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-cloud-upload-outlined')
export default class CloudUploadOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudUploadOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CloudUploadOutlinedSvg}></AntdIcon>;
  };
}