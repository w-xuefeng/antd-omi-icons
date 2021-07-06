// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileDoneOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileDoneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-done-outlined')
export default class FileDoneOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileDoneOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FileDoneOutlinedSvg}></AntdIcon>;
  };
}