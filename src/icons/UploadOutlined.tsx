// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UploadOutlinedSvg from '@ant-design/icons-svg/es/asn/UploadOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-upload-outlined')
export default class UploadOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UploadOutlined';
  static tagName = 'o-upload-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UploadOutlinedSvg} />;
  };
}