// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilePdfTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilePdfTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-pdf-two-tone')
export default class FilePdfTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FilePdfTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FilePdfTwoToneSvg}></AntdIcon>;
  };
}