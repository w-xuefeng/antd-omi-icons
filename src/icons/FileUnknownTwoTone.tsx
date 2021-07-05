// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileUnknownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileUnknownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-unknown-two-tone')
export default class FileUnknownTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileUnknownTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileUnknownTwoToneSvg}></AntdIcon>;
  };
}