// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/UploadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-upload-outlined')
export default class UploadOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UploadOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={UploadOutlinedSvg}></AntdIcon>;
  };
}