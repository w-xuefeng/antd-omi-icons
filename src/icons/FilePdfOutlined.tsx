// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilePdfOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePdfOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-pdf-outlined')
export default class FilePdfOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FilePdfOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FilePdfOutlinedSvg} />;
  };
}