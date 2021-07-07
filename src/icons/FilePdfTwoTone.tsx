// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilePdfTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilePdfTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-pdf-two-tone')
export default class FilePdfTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FilePdfTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FilePdfTwoToneSvg} />;
  };
}