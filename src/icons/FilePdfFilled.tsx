// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilePdfFilledSvg from '@ant-design/icons-svg/lib/asn/FilePdfFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-pdf-filled')
export default class FilePdfFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FilePdfFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FilePdfFilledSvg}></AntdIcon>;
  };
}