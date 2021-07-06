// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-two-tone')
export default class FileTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FileTwoToneSvg}></AntdIcon>;
  };
}