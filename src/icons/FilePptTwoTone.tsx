// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilePptTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilePptTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-ppt-two-tone')
export default class FilePptTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FilePptTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FilePptTwoToneSvg}></AntdIcon>;
  };
}