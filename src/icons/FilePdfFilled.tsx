// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilePdfFilledSvg from '@ant-design/icons-svg/es/asn/FilePdfFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-pdf-filled')
export default class FilePdfFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FilePdfFilled';
  static tagName = 'o-file-pdf-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FilePdfFilledSvg} />;
  };
}