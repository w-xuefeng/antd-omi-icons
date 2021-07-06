// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilePptOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePptOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-ppt-outlined')
export default class FilePptOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FilePptOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FilePptOutlinedSvg}></AntdIcon>;
  };
}