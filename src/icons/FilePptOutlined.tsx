// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilePptOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePptOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-ppt-outlined')
export default class FilePptOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FilePptOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FilePptOutlinedSvg} />;
  };
}